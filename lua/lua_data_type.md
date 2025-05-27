# Lua 데이터 타입 정리 📜

Lua는 동적 타입 언어로, 변수의 타입은 값에 의해 결정됩니다. 다음은 Lua에서 사용되는 주요 데이터 타입들입니다.

---

## 1. nil

`nil`은 값이 없거나 존재하지 않음을 나타내는 특별한 타입입니다. 할당되지 않은 변수의 기본값이기도 하며, 값을 의도적으로 제거할 때도 사용됩니다. `nil`은 그 자체로 하나의 값을 가집니다.

-   **특징**: 조건문에서 `false`와 동일하게 취급됩니다.
-   **예시**:
    ```lua
    local a -- 선언만 하고 값을 할당하지 않으면 nil 값을 가집니다.
    print(type(a)) -- 출력: nil

    local b = 10
    print(type(b)) -- 출력: number
    b = nil        -- b의 값을 nil로 설정하여 제거
    print(type(b)) -- 출력: nil
    ```

---

## 2. boolean (불리언)

`boolean` 타입은 논리적인 참(`true`) 또는 거짓(`false`)을 나타냅니다. 조건문이나 논리 연산에 주로 사용됩니다.

-   **특징**: `nil`과 `false`만이 거짓으로 간주되며, 그 외 모든 값(숫자 0, 빈 문자열 "" 포함)은 참으로 간주됩니다.
-   **예시**:
    ```lua
    local isLearning = true
    local isGameOver = false

    print(type(isLearning)) -- 출력: boolean

    if isLearning then
        print("열심히 배우는 중입니다!")
    end

    if not isGameOver then
        print("게임은 아직 끝나지 않았습니다.")
    end
    ```

---

## 3. number (숫자)

`number` 타입은 모든 종류의 숫자(정수 및 실수)를 나타냅니다. Lua는 기본적으로 내부에서 배정밀도 부동소수점(double-precision floating-point) 형식으로 숫자를 처리합니다.

-   **특징**: 십진수, 16진수(0x 접두사), 지수 표기법(e 또는 E)을 사용할 수 있습니다.
-   **예시**:
    ```lua
    local integerNum = 10
    local floatNum = 3.14
    local scientificNum = 5e2 -- 5 * 10^2 = 500
    local hexNum = 0xff       -- 16진수 255

    print(type(integerNum)) -- 출력: number
    print(integerNum + floatNum) -- 출력: 13.14
    ```

---

## 4. string (문자열)

`string` 타입은 문자의 연속을 나타냅니다. 작은따옴표(`'`) 또는 큰따옴표(`"`)로 묶어서 표현하며, 여러 줄 문자열은 대괄호 두 쌍(`[[`와 `]]`)을 사용합니다.

-   **특징**: 문자열은 불변(immutable)입니다. 즉, 한번 생성된 문자열의 내용은 변경할 수 없습니다. (문자열 연산을 하면 새로운 문자열이 생성됩니다.)
-   **예시**:
    ```lua
    local singleQuoteStr = '안녕하세요!'
    local doubleQuoteStr = "Lua는 재미있어요."
    local multiLineStr = [[
    이것은
    여러 줄에 걸친
    문자열입니다.
    ]]

    print(type(singleQuoteStr)) -- 출력: string
    print(singleQuoteStr .. " " .. doubleQuoteStr) -- '..'는 문자열 연결 연산자입니다.
    -- 출력: 안녕하세요! Lua는 재미있어요.

    print(#singleQuoteStr) -- '#'은 문자열의 길이를 반환합니다. (바이트 단위)
    ```

---

## 5. table (테이블)

`table`은 Lua에서 가장 중요하고 유연한 데이터 구조입니다. 배열(array), 딕셔너리(dictionary, 해시맵), 객체(object) 등 다양한 형태로 사용될 수 있습니다.

-   **특징**: 키(key)와 값(value)의 쌍으로 데이터를 저장합니다. 키는 `nil`을 제외한 모든 Lua 값이 될 수 있으며, 값도 마찬가지입니다.
-   **예시**:
    ```lua
    -- 배열과 유사한 테이블 (인덱스가 1부터 시작)
    local fruits = {"apple", "banana", "orange"}
    print(type(fruits))    -- 출력: table
    print(fruits[1])       -- 출력: apple

    -- 딕셔너리/해시맵과 유사한 테이블
    local person = {
        name = "홍길동",
        age = 30,
        isStudent = false
    }
    print(person.name)     -- 출력: 홍길동
    print(person["age"])   -- 출력: 30 (키가 문자열일 경우 이렇게도 접근 가능)

    -- 혼합된 형태의 테이블
    local mixedTable = {
        10,                     -- fruits[1] = 10
        color = "blue",
        [5] = "five",           -- 인덱스 5에 "five" 저장
        {x = 0, y = 1}          -- 중첩 테이블 (mixedTable[3]에 저장됨)
    }
    print(mixedTable[1])      -- 출력: 10
    print(mixedTable.color)   -- 출력: blue
    ```

---

## 6. function (함수)

Lua에서 함수는 **일급 값(first-class value)**입니다. 이는 함수를 변수에 할당하거나, 다른 함수의 인자로 전달하거나, 함수의 반환 값으로 사용할 수 있다는 의미입니다.

-   **예시**:
    ```lua
    -- 함수 정의
    local function greet(name)
        return "안녕하세요, " .. name .. "님!"
    end

    print(type(greet)) -- 출력: function

    local message = greet("로블록스 개발자")
    print(message)     -- 출력: 안녕하세요, 로블록스 개발자님!

    -- 익명 함수를 변수에 할당
    local add = function(a, b)
        return a + b
    end
    print(add(5, 3))   -- 출력: 8
    ```

---

## 7. userdata (유저데이터)

`userdata` 타입은 Lua에서 직접 생성하거나 조작할 수 없는 C 데이터를 나타냅니다. 주로 C API를 통해 Lua와 C 코드를 통합할 때 사용됩니다. 로블록스에서는 엔진의 객체(예: `Part`, `Model`, `Script` 등)가 `userdata`로 표현되는 경우가 많습니다.

-   **특징**: Lua 코드에서는 이 데이터의 내부를 직접 들여다보거나 수정하기 어렵고, 보통은 이와 연결된 Lua 함수(메서드)를 통해 상호작용합니다.
-   **예시 (개념적)**:
    ```lua
    -- 로블록스 스튜디오 내에서
    local part = Instance.new("Part") -- 'part'는 userdata 타입입니다.
    print(type(part))               -- 출력: userdata (로블록스 환경에서)
    part.BrickColor = BrickColor.new("Really red") -- userdata에 연결된 속성 변경
    ```

---

## 8. thread (스레드)

`thread` 타입은 코루틴(coroutine)을 나타냅니다. 코루틴은 독립적인 실행 흐름을 가지며, 협력적 멀티태스킹(cooperative multitasking)을 가능하게 합니다. 이를 통해 여러 작업을 동시에 실행하는 것처럼 보이게 할 수 있습니다.

-   **특징**: 동시에 여러 스크립트 로직을 관리하거나, 긴 작업을 중단했다가 다시 시작하는 등의 고급 프로그래밍에 사용됩니다.
-   **예시 (기본 코루틴 사용법)**:
    ```lua
    local co = coroutine.create(function(message)
        print("코루틴 내부: " .. message)
        coroutine.yield("첫 번째 결과") -- 실행을 잠시 멈추고 값을 반환
        print("코루틴 재개됨")
        return "최종 결과"
    end)

    print(type(co)) -- 출력: thread

    print(coroutine.status(co)) -- 출력: suspended

    local status, value = coroutine.resume(co, "안녕 코루틴!") -- 코루틴 시작 또는 재개
    print(status, value)      -- 출력: true  첫 번째 결과

    print(coroutine.status(co)) -- 출력: suspended

    local status2, value2 = coroutine.resume(co)
    print(status2, value2)    -- 출력: true  최종 결과

    print(coroutine.status(co)) -- 출력: dead
    ```

---

이것이 Lua의 주요 데이터 타입들입니다! 각 타입을 이해하고 활용하는 것은 Lua 프로그래밍의 기초가 됩니다. 특히 `table`은 매우 다양하게 활용되므로 익숙해지는 것이 중요합니다.
