## 4. `string` 활용 예제
`string` 타입은 문자의 연속, 즉 텍스트 데이터를 나타냅니다. 로블록스에서는 객체의 이름 지정, 플레이어 채팅 메시지 처리, 사용자 인터페이스(UI)에 텍스트 표시, 데이터 직렬화, 에러 메시지 출력 등 매우 광범위하게 사용됩니다. 문자열은 작은따옴표(`'`)나 큰따옴표(`"`)로 묶어 표현하며, 여러 줄 문자열은 대괄호 두 쌍(`[[`와 `]]`)으로 감싸서 만듭니다.

* **스크립트 위치 예시:** `ServerScriptService` 안에 `Script`를 추가합니다.
* **주요 내용:** 게임에 새로운 플레이어가 접속할 때마다 해당 플레이어의 이름과 UserID를 사용하여 고유한 환영 메시지 `string`을 생성합니다. 이 메시지를 서버 콘솔에 출력하고, 플레이어의 화면에는 `ScreenGui`와 `TextLabel`을 이용해 개인화된 환영 문구를 표시합니다. 또한, `string`으로 플레이어의 속성(Attribute)을 설정하고 읽어옵니다.

```lua
local PlayersService = game:GetService("Players") -- Players 서비스 (userdata)
local ServerStorage = game:GetService("ServerStorage") -- ServerStorage 서비스 (userdata)

-- 예시: ServerStorage에 'WelcomeMessageGuiTemplate'이라는 이름의 ScreenGui를 미리 만들어 두었다고 가정
-- 이 ScreenGui 안에는 'MessageText'라는 이름의 TextLabel이 있다고 가정합니다.

PlayersService.PlayerAdded:Connect(function(player) -- player는 Player 객체 (userdata)
    -- string: 플레이어의 이름 (player.Name)과 UserID (player.UserId)를 조합
    -- player.UserId는 number이므로 tostring() 함수를 사용해 string으로 변환해야 문자열 결합이 가능합니다.
    local playerIdentifier = player.Name .. " (ID: " .. tostring(player.UserId) .. ")"
    local serverWelcomeMessage = "플레이어 접속: " .. playerIdentifier .. ". 현재 시각: " .. os.date("%Y-%m-%d %H:%M:%S") -- os.date도 string 반환

    print(serverWelcomeMessage) -- 서버의 Output 창에 string 메시지 출력

    -- 플레이어에게 개인화된 GUI 메시지 표시
    local playerGui = player:FindFirstChild("PlayerGui") -- PlayerGui (userdata), 각 플레이어의 GUI 컨테이너
    if playerGui then
        local guiTemplate = ServerStorage:FindFirstChild("WelcomeMessageGuiTemplate") -- ScreenGui 템플릿 (userdata)
        if guiTemplate and guiTemplate:IsA("ScreenGui") then
            local newGui = guiTemplate:Clone() -- 템플릿 복제
            newGui.Name = "WelcomeMessageGui" -- string: 복제된 GUI의 이름 변경
            
            local messageLabel = newGui:FindFirstChild("MessageText") -- TextLabel (userdata) 탐색
            if messageLabel and messageLabel:IsA("TextLabel") then
                -- TextLabel의 Text 속성 (string)에 환영 메시지 할당
                messageLabel.Text = "어서오세요, " .. player.Name .. "님!\n 즐거운 시간 보내세요." -- '\n'은 줄바꿈 문자
                messageLabel.TextColor3 = Color3.fromRGB(255, 255, 0) -- Color3 (userdata), 노란색 글씨
            end
            newGui.Parent = playerGui -- 복제된 GUI를 플레이어의 PlayerGui에 추가하여 화면에 표시
        else
            warn("ServerStorage에서 'WelcomeMessageGuiTemplate' ScreenGui를 찾을 수 없습니다.")
        end
    end
    
    -- 플레이어 객체에 string 타입의 Attribute 설정
    local joinTimestamp = os.time() -- number: 현재 시간 (초 단위 타임스탬프)
    player:SetAttribute("LastJoinMessage", "플레이어 " .. player.Name .. "님이 " .. os.date("!*t", joinTimestamp).hour .. "시에 접속했습니다.")
    
    -- 설정한 Attribute (string) 읽어오기
    local storedMessage = player:GetAttribute("LastJoinMessage")
    if storedMessage then
        print(player.Name .. "의 접속 메시지 Attribute: '" .. storedMessage .. "'")
    end
end)
```

* `string`의 핵심 활용:
   * `player.Name`, `tostring(player.UserId)`, `os.date()` 반환 값 등 다양한 소스로부터 문자열을 얻거나 생성합니다.
   * 문자열 연결 연산자 `..`를 사용하여 여러 문자열 조각들을 합쳐 새로운 문자열을 만듭니다.
   * `Instance.Name` 속성, `TextLabel.Text` 속성 등 객체의 문자열 기반 속성에 값을 할당합니다.
   * `print()`, `warn()` 함수를 통해 문자열을 콘솔에 출력하여 디버깅 및 정보 전달에 사용합니다.
   * `SetAttribute` 와 `GetAttribute` 를 사용하여 객체에 문자열 데이터를 저장하고 불러올 수 있습니다.


---
## 5. `table` (배열처럼 활용) 예제
Lua의 `table`은 유일한 복합 데이터 구조로, 매우 유연하게 사용될 수 있습니다. 키(key)와 값(value)의 쌍으로 데이터를 저장하는데, 키로 연속된 양의 정수(1부터 시작)를 사용하면 다른 프로그래밍 언어의 배열(array) 또는 리스트(list)와 유사하게 동작합니다. 로블록스에서는 여러 객체, 위치 정보, 설정 값 등을 순서대로 저장하고 관리할 때 유용하게 사용됩니다.

* **스크립트 위치 예시:** `ServerScriptService` 안에 `Script`를 추가합니다.
* **주요 내용:** `table`에 여러 `BrickColor` 값과 생성할 파트의 이름을 순서대로 저장해둡니다. `ipairs` 반복문을 사용하여 이 `table`들을 순회하면서, 각 순서에 맞는 색상과 이름을 가진 여러 개의 파트를 월드에 일정한 간격으로 생성합니다.

```lua
local gameWorkspace = game.Workspace

-- table: 생성될 파트들의 이름 목록 (문자열 배열)
local partNamesList = {"AlphaPart", "BravoPart", "CharliePart", "DeltaPart", "EchoPart"}

-- table: 각 파트에 적용될 BrickColor 객체 목록 (BrickColor 배열)
local partColorsList = {
    BrickColor.new("Bright red"),    -- index 1
    BrickColor.new("Bright blue"),   -- index 2
    BrickColor.new("Lime green"),    -- index 3
    BrickColor.new("New Yeller"),    -- index 4
    BrickColor.new("Royal purple")   -- index 5
}

-- table: 각 파트의 크기를 Vector3로 저장 (Vector3 배열)
local partSizesList = {
    Vector3.new(2, 2, 2),
    Vector3.new(3, 3, 3),
    Vector3.new(2, 4, 2),
    Vector3.new(4, 2, 4),
    Vector3.new(2.5, 2.5, 2.5)
}

local startXPosition = -15 -- number: 첫 번째 파트가 생성될 X 좌표
local yPosition = 5       -- number: 모든 파트가 생성될 Y 좌표
local zPosition = -25     -- number: 모든 파트가 생성될 Z 좌표
local spacingBetweenParts = 6 -- number: 파트들 사이의 X축 간격

print("배열형 table을 활용하여 여러 파트 생성 시작...")

-- ipairs는 table의 숫자 인덱스 1부터 값이 nil이 아닐 때까지 순차적으로 반복합니다.
-- index는 현재 요소의 숫자 인덱스, name은 해당 인덱스의 값(이 경우 파트 이름)입니다.
for index, nameString in ipairs(partNamesList) do
    local newPart = Instance.new("Part")
    newPart.Name = nameString -- table (partNamesList)에서 가져온 string 값으로 이름 설정
    newPart.Anchored = true
    
    -- 위치 계산: index를 사용하여 각 파트의 X 위치를 결정합니다.
    -- 첫 번째 파트(index 1)는 startXPosition에, 두 번째는 startXPosition + spacing에 위치합니다.
    local currentXPosition = startXPosition + (index - 1) * spacingBetweenParts
    newPart.Position = Vector3.new(currentXPosition, yPosition, zPosition)
    
    -- 색상 적용: partColorsList table에서 현재 index에 해당하는 BrickColor를 가져옵니다.
    -- 만약 partNamesList의 길이가 partColorsList보다 길 경우를 대비하여, 해당 인덱스에 색상이 있는지 확인합니다.
    if partColorsList[index] then
        newPart.BrickColor = partColorsList[index] -- table (partColorsList)에서 가져온 BrickColor 값
    else
        newPart.BrickColor = BrickColor.Gray() -- 기본 회색으로 설정
    end

    -- 크기 적용: partSizesList table에서 현재 index에 해당하는 Vector3 크기를 가져옵니다.
    if partSizesList[index] then
        newPart.Size = partSizesList[index]
    else
        newPart.Size = Vector3.new(4,4,4) -- 기본 크기
    end
    
    newPart.Parent = gameWorkspace
    print("생성된 파트: " .. newPart.Name .. 
          ", 위치: " .. tostring(newPart.Position) .. 
          ", 색상: " .. newPart.BrickColor.Name ..
          ", 크기: " .. tostring(newPart.Size))
end

-- '#' 연산자는 table에서 정수 키 1부터 연속된 요소들의 개수(배열의 길이)를 반환합니다.
print(#partNamesList .. "개의 파트 생성을 완료했습니다! (table 길이 연산자 # 활용)")
print("첫 번째 파트의 이름: " .. partNamesList[1]) -- 인덱스를 사용하여 특정 요소에 직접 접근
```

* **`table`의 핵심 활용 (배열로서):**
   * `{element1, element2, ...}` 와 같이 중괄호 안에 값들을 쉼표로 구분하여 넣어 순서가 있는 목록을 만듭니다.
   * `ipairs` 반복문을 사용하여 `table`의 숫자 인덱스 1부터 순차적으로 각 요소와 해당 인덱스에 접근합니다.
   * `tableName[index]` 구문을 사용하여 특정 인덱스에 있는 요소에 직접 접근하여 값을 읽거나 수정합니다.
   * `#tableName` 연산자를 사용하여 `table`의 배열 부분의 길이를 얻습니다. (주의: `nil` 값이 중간에 있거나, 키가 숫자가 아니거나, 순차적이지 않으면 정확한 배열 길이를 반환하지 않을 수 있습니다.)

---

## 6. `table` (딕셔너리처럼 활용) 예제

Lua의 `table`은 키(key)와 값(value)의 쌍으로 데이터를 저장하여 딕셔너리(다른 언어에서는 해시맵, 연관 배열 등으로 불림)처럼 사용할 수 있습니다. 키는 `nil`을 제외한 거의 모든 Lua 값이 될 수 있으며, 주로 문자열이나 숫자가 사용됩니다. 이는 객체의 속성, 게임 설정, 플레이어 데이터 등 구조화된 정보를 명확하고 유연하게 관리하는 데 매우 유용합니다. `table`을 딕셔너리로 사용할 때는 요소들의 순서가 보장되지 않습니다.

* **스크립트 위치 예시:** `ServerScriptService` 안에 `Script`를 추가합니다.
* **주요 내용:** `table`을 사용하여 몬스터의 다양한 속성(이름, 체력, 공격력, 특수 능력 등)을 문자열 키와 함께 정의합니다. 이 정보를 바탕으로 메시지를 출력하고, `table` 내의 값을 수정하거나 새로운 키-값 쌍을 추가하는 방법을 보여줍니다.

```lua
-- table: 몬스터의 다양한 속성을 키-값 쌍으로 저장 (딕셔너리 역할)
local monsterProfile = {
    Name = "고대 골렘 수호자",         -- 키: "Name"(string), 값: "원시시 골렘"(string)
    ElementType = "Earth",          -- 키: "ElementType"(string), 값: "Earth"(string)
    MaxHealth = 500,                -- 키: "MaxHealth"(number), 값: 500(number)
    CurrentHealth = 500,            -- 키: "CurrentHealth"(number), 값: 500(number)
    AttackDamage = 45,              -- 키: "AttackDamage"(number), 값: 45(number)
    Defense = 0.3,                  -- 키: "Defense"(number), 값: 0.3 (30% 데미지 감소)
    IsAggressive = true,            -- 키: "IsAggressive"(boolean), 값: true(boolean)
    Drops = {"마석 조각", "유물 파편", "마정석핵"}, -- 키: "Drops"(string), 값: table (배열)
    
    -- 중첩된 table을 사용하여 복잡한 데이터 구조 표현
    SpecialAbilities = {            -- 키: "SpecialAbilities"(string), 값: table (딕셔너리)
        Slam = {                    -- 키: "Slam"(string), 값: table (딕셔너리)
            Damage = 70,            -- number
            Cooldown = 12,          -- number (초)
            AreaOfEffect = 5        -- number (스터드)
        },
        RockShield = {              -- 키: "RockShield"(string), 값: table (딕셔너리)
            Duration = 8,           -- number (초)
            DefenseBoost = 0.5,     -- number (추가 방어력 50%)
            Cooldown = 20           -- number (초)
        }
    },
    
    -- 함수도 table의 값으로 저장 가능
    Roar = function(self)
        print(self.Name .. "(이)가 포효합니다: !!!!!!")
        -- 실제로는 사운드 재생 등의 로직이 들어갈 수 있습니다.
        -- local sound = Instance.new("Sound", game.Workspace) -- 예시
        -- sound.SoundId = "rbxassetid://YOUR_SOUND_ID_HERE"
        -- sound:Play()
    end
}

print("몬스터 프로필 정보:")
-- pairs 반복문은 table의 모든 키-값 쌍을 순회합니다. (순서는 보장되지 않음)
for key, value in pairs(monsterProfile) do
    if type(value) == "table" then
        print("  " .. key .. ": (테이블 데이터 - 하위 항목은 직접 참조하여 확인)")
    elseif type(value) == "function" then
        print("  " .. key .. ": (함수)")
    else
        print("  " .. key .. ": " .. tostring(value))
    end
end

-- 특정 데이터 접근 및 사용 예시
print("\n--- 특정 정보 접근 및 사용 ---")
print("몬스터 이름: " .. monsterProfile.Name) -- .(점) 연산자로 키에 접근
print("최대 체력: " .. monsterProfile["MaxHealth"]) -- ["키"] 형태로도 접근 가능 (키가 변수거나 공백/특수문자 포함 시 유용)
print("첫 번째 드랍 아이템: " .. monsterProfile.Drops[1]) -- 중첩된 배열 테이블 접근
print("강타(Slam) 공격력: " .. monsterProfile.SpecialAbilities.Slam.Damage) -- 중첩된 딕셔너리 테이블 접근

-- table 내 함수 호출
monsterProfile:Roar() -- ':' 문법은 함수에 self 인자를 암시적으로 전달 (monsterProfile.Roar(monsterProfile)와 유사)

-- 데이터 수정 예시
monsterProfile.CurrentHealth = monsterProfile.CurrentHealth - 120 -- number 연산으로 체력 감소
print(monsterProfile.Name .. "이(가) 피해를 입어 현재 체력이 " .. monsterProfile.CurrentHealth .. "이(가) 되었습니다.")

-- 새로운 키-값 쌍 추가
monsterProfile.LastSeenLocation = Vector3.new(150, 25, -80) -- Vector3 (userdata) 값 추가
print(monsterProfile.Name .. "의 마지막 목격 위치: " .. tostring(monsterProfile.LastSeenLocation))

-- 키 삭제 (값에 nil 할당)
monsterProfile.ElementType = nil
print("몬스터의 ElementType 정보 삭제됨: " .. tostring(monsterProfile.ElementType))
```

* **`table`의 핵심 활용 (딕셔너리로서):**
   * `{ key1 = value1, key2 = value2, ... }` 와 같이 중괄호 안에 `키 = 값` 쌍들을 쉼표로 구분하여 데이터를 저장합니다.
   * `pairs` 반복문을 사용하여 `table`의 모든 키-값 쌍을 순회합니다 (순서는 보장되지 않음).
   * `tableName.keyName` 또는 `tableName["keyNameString"]` 구문을 사용하여 특정 키에 해당하는 값에 접근하고 수정합니다.
   * 중첩된 `table`을 사용하여 계층적이고 복잡한 데이터 구조를 효과적으로 표현할 수 있습니다 (예: `monsterProfile.SpecialAbilities.Slam.Damage`).
   * `table`에 함수를 저장하여 객체 지향 프로그래밍의 메소드처럼 활용할 수 있습니다.