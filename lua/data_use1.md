## 1. `nil` 활용 예제

`nil`은 값이 없거나 존재하지 않음을 나타내는 특별한 타입입니다. 로블록스에서는 주로 객체의 존재 유무를 확인하거나, 참조를 명시적으로 제거할 때 사용됩니다.

* **스크립트 위치 예시:** `Workspace` 내의 `Part` 안에 `Script`를 추가합니다.
* **주요 내용:** `Part`의 자식 객체를 이름으로 찾아보고, 그 결과가 `nil`인지 아닌지에 따라 다른 동작을 수행합니다.
* **nil의 핵심 활용:** `childObject == nil` 구문을 통해 `FindFirstChild` 메소드의 반환 값(객체 또는 `nil`)을 검사하여 조건부 로직을 실행합니다.

```lua
-- 이 스크립트는 특정 Part 내부에 있다고 가정합니다.
local part = script.Parent
local targetChildName = "MySpecialObject" -- 찾고자 하는 자식 객체의 이름

-- wait(math.random(1,3)) -- 비동기적으로 객체가 생성될 수 있는 상황을 가정

local childObject = part:FindFirstChild(targetChildName)

if childObject == nil then
    -- childObject가 nil이면, 해당 이름의 자식을 찾지 못한 것입니다.
    print("'" .. targetChildName .. "'(이)라는 자식 객체를 찾을 수 없습니다. (값: " .. tostring(childObject) .. ")")
else
    -- childObject가 nil이 아니면, 객체를 찾은 것입니다.
    print("'" .. targetChildName .. "' 객체를 찾았습니다! 타입: " .. typeof(childObject))
    -- 예시: 찾은 객체가 BasePart라면 투명하게 만들기
    if childObject:IsA("BasePart") then
        childObject.Transparency = 0.5
        print("'" .. targetChildName .. "'의 투명도를 조절했습니다.")
    end
end

-- 사용이 끝난 변수에 nil을 할당하여 메모리 관리에 도움을 줄 수 있습니다 (Lua의 가비지 컬렉션).
-- childObject = nil 
-- print("childObject 참조 해제 후: " .. tostring(childObject))
```

## 2. `boolean` 활용 예제
`boolean` 타입은 논리적인 참(`true`) 또는 거짓(`false`) 두 가지 값만을 가집니다. 게임 내 여러 상태(예: 문 열림/닫힘, 기능 활성화/비활성화, 특정 조건 만족 여부)를 제어하고 판단하는 데 핵심적인 역할을 합니다. 조건문 (`if`, `elseif`, `while`, `repeat until`)에서 주로 사용됩니다. Lua에서는 `false`와 `nil`만이 조건문에서 거짓으로 간주되며, 그 외 모든 값(숫자 0, 빈 문자열 "" 포함)은 참으로 간주됩니다.

* **스크립트 위치 예시:** `Workspace` 내의 `Part` 안에 `Script를` 추가합니다.
* **주요 내용:** `isFeatureEnabled`라는 `boolean` 플래그(flag) 변수를 사용하여, 파트 터치 시 특정 기능의 실행 여부를 결정합니다. 기능 사용 후 플래그를 변경하여 상태를 전환하고, 일정 시간 후 다시 원래 상태로 복귀시키는 로직을 포함합니다.

```lua
local part = script.Parent
local isFeatureEnabled = true -- boolean 변수: 기능의 현재 활성화 상태를 저장

print("초기 기능 활성화 상태: " .. tostring(isFeatureEnabled)) -- boolean 값을 문자열로 변환하여 출력

part.Touched:Connect(function(otherPart)
    -- otherPart는 이 파트와 접촉한 다른 BasePart (userdata)입니다.
    -- 접촉한 객체의 부모에서 Humanoid (userdata)를 찾아 캐릭터인지 확인합니다.
    local character = otherPart.Parent
    local humanoid = character:FindFirstChildWhichIsA("Humanoid")

    -- humanoid가 존재하고 (nil이 아니고), isFeatureEnabled가 true일 때만 기능을 실행합니다.
    if humanoid and isFeatureEnabled == true then 
        print(character.Name .. "이(가) 기능을 발동시켰습니다!")
        part.BrickColor = BrickColor.Random() -- BrickColor (userdata): 파트 색상을 무작위로 변경
        
        -- 기능 사용 후, isFeatureEnabled를 false로 변경하여 일시적으로 비활성화합니다.
        isFeatureEnabled = false 
        print("기능이 사용되어 일시적으로 비활성화되었습니다. 현재 상태: " .. tostring(isFeatureEnabled))
        
        -- 일정 시간 (예: 5초) 후 기능을 다시 활성화합니다.
        wait(5) -- number: 5초 동안 스크립트 실행을 중단 (다른 스크립트는 계속 실행됨)
        isFeatureEnabled = true
        part.BrickColor = BrickColor.new("Medium stone grey") -- BrickColor: 파트 색상을 원래대로(예시) 복귀
        print("기능이 다시 활성화되었습니다. 현재 상태: " .. tostring(isFeatureEnabled))

    elseif humanoid and isFeatureEnabled == false then
        print(character.Name .. "이(가) 터치했지만, 기능이 현재 비활성화 상태입니다.")
    end
end)
```

* `boolean`의 핵심 활용:

   * `isFeatureEnabled` 변수에 `true` 또는 `false`를 할당하여 프로그램의 상태를 명확하게 나타냅니다.
   * `if isFeatureEnabled == true then` (또는 간단히 `if isFeatureEnabled then`) 조건문을 사용하여 `boolean` 값에 따라 다른 코드 블록을 실행합니다.
   * 게임 로직의 흐름을 제어하고, 특정 조건에 따라 동작을 허용하거나 제한하는 데 사용됩니다.
---

## 3. `number` 활용 예제
`number` 타입은 Lua에서 모든 종류의 숫자(정수 및 실수)를 나타내는 데 사용됩니다. 로블록스에서는 파트의 크기, 위치, 회전각, 투명도, 물리 속성, 시간, 플레이어 점수, 체력 등 광범위한 수치 데이터를 다룰 때 사용됩니다. Lua는 기본적으로 배정밀도 부동소수점 형식으로 숫자를 처리합니다.

* **스크립트 위치 예시:** `ServerScriptService` 안에 `Script`를 추가합니다.
* **주요 내용:** 새로운 `Part`를 동적으로 생성하고, `number` 타입의 변수들을 사용하여 주기적으로 해당 파트의 크기를 변경하고 Y축 기준으로 회전시키는 애니메이션 효과를 구현합니다.

```lua
local gameWorkspace = game.Workspace -- Workspace 서비스 (userdata)

-- 새 파트(Part) 인스턴스 (userdata) 생성
local dynamicPart = Instance.new("Part")
dynamicPart.Name = "DynamicSizingRotatingPart" -- string: 파트 이름 설정
dynamicPart.Size = Vector3.new(4, 4, 4)       -- Vector3 (userdata): 초기 크기 (각 축은 number)
dynamicPart.Position = Vector3.new(0, 10, -20)  -- Vector3: 초기 위치
dynamicPart.Anchored = true                     -- boolean: 파트를 공중에 고정
dynamicPart.BrickColor = BrickColor.new("Lime green") -- BrickColor: 파트 색상
dynamicPart.Parent = gameWorkspace              -- Parent를 Workspace로 설정하여 게임 월드에 표시

local growthAmount = 2     -- number: 크기가 최대로 커질 때 추가될 양
local rotationSpeed = 30   -- number: 초당 회전 각도 (도)
local effectDuration = 10  -- number: 전체 효과 지속 시간 (초)
local updateInterval = 0.05 -- number: 각 업데이트 간의 시간 간격 (초)
local elapsedTime = 0      -- number: 효과 시작 후 경과 시간

print(dynamicPart.Name .. "의 동적 크기 및 회전 효과를 시작합니다!")

-- effectDuration 동안 반복 실행
while elapsedTime < effectDuration do
    -- 실제 경과 시간을 더 정확하게 측정하기 위해 wait의 반환 값을 사용합니다.
    local deltaTime = wait(updateInterval) 
    elapsedTime = elapsedTime + deltaTime

    -- 시간에 따라 크기를 부드럽게 변경 (사인 함수 사용: 0 -> 1 -> 0 -> -1 -> 0 반복)
    -- elapsedTime / effectDuration 비율로 전체 주기를 조절하고, math.pi를 곱해 라디안 값으로 변환
    local scaleCycle = math.sin(elapsedTime / effectDuration * 2 * math.pi) -- -1에서 1 사이의 number 값
    local currentSizeChange = growthAmount * scaleCycle
    dynamicPart.Size = Vector3.new(4 + currentSizeChange, 4 + currentSizeChange, 4 + currentSizeChange)

    -- Y축 기준으로 회전
    local currentOrientation = dynamicPart.Orientation -- Vector3: 현재 회전값 (오일러 각도)
    -- deltaTime을 곱하여 프레임 속도에 관계없이 일정한 속도로 회전하도록 함
    dynamicPart.Orientation = currentOrientation + Vector3.new(0, rotationSpeed * deltaTime, 0) 
    
    -- print("경과 시간: " .. string.format("%.2f", elapsedTime) .. "초, 크기 변화량: " .. string.format("%.2f", currentSizeChange))
end

dynamicPart.Size = Vector3.new(4,4,4) -- 효과 종료 후 원래 크기로 복구
dynamicPart.Orientation = Vector3.new(0,0,0) -- 원래 방향으로 복구
print(dynamicPart.Name .. "의 동적 효과가 종료되었습니다.")
```

* **`number`의 핵심 활용:**
  * `growthAmount`, `rotationSpeed`, `effectDuration`, `updateInterval`, `elapsedTime`, `deltaTime` 등 다양한 변수에 숫자 값을 저장하여 로직을 제어합니다.
  * `Vector3.new(x, y, z)`에서 `x`, `y`, `z` 컴포넌트는 모두 `number` 타입입니다. 파트의 `Size`, `Position`, `Orientation` 속성에 사용됩니다.
  * `wait(n)` 함수는 n초(number) 동안 실행을 지연시키며, 실제 지연된 시간(number)을 반환합니다.
  * `math.sin`, `math.pi` 등 수학 라이브러리 함수는 `number`를 인자로 받고 `number`를 반환하여 복잡한 계산을 수행합니다.
---
