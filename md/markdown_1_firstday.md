마크다운 사용법
====
마크다운 문법에 대해 배우고 이를 활용해 배운 것을 정리 해보려한다.

## 📚 목차
1. [제목 사용법](#제목-=-으로-사용가능)
2. [글머리(#) 사용법](#글머리)
3. [글씨 바꾸기](#글씨-바꾸기)
4. [리스트 만들기](#리스트-만드는-법)
5. [체크리스트](#체크리스트-만들기)
6. [표 만들기](#표-만들기)
7. [링크와 이미지](#링크와-이미지-사용법)
8. [줄바꿈](#마크다운은-엔터-하나로-줄이-안바뀐다)
9. [백틱 사용법](#백틱-사용법)


제목 =으로 사용가능
====
부제목 -으로 사용가능
----

```md
제목
===
부제목
---
```

# 글머리
## # 으로 글머리를 만들 수 있다고 한다.
### # 이
#### 많을수록
##### 더 작다.

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
####### h7은 지원안한다.
```
___

언더바 3개로 줄을 나눌 수 도 있다.
___

## 글씨 바꾸기

이것은 **굵은 글씨**다. * 2개로 감싸서 만들 수 있다.

그리고 이건 *기울임체*다. * 1개로 감싸서 만들 수 있다.

이건 ~~취소선~~이다. 물결표 2개로 감싸서 만들 수 있다.

```md
**볼드체**
*이탈릭체*
~~취소선~~
```

>인용구 >로 인용구를 만들 수 있다.

```md
> 인용구다.
```
## 리스트 만드는 법.

* *표시로 만들 수 있다.
- -표시로도 만들 수 있다.
+ +기호도 가능하고
  * 이렇게 혼합도
    - 가능하다.
1. 첫번째
2. 두번째
3. 숫자로도 가능하다.

## 체크리스트 만들기
- [x] 마크다운 문법 정리
- [ ] 깃허브에 올리기
- [ ] README.md 만들기
 ```md
- [x] 체크함
- [ ] 체크안함
 ```

## 표 만들기
| 항목 | 설명 |
|------|------|
| 제목 | #, ##, === 등으로 표시 |
| 목록 | -, *, 숫자 등으로 표시 |

```md
| 항목 | 설명 |
|------|------|
| 제목 | #, ##, === 등으로 표시 |
| 목록 | -, *, 숫자 등으로 표시 |

```

## 링크와 이미지 사용법

[구글로 가기](https://google.com)

![깃허브로고](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

```md
[]대괄호로 이름, ()소괄호로 링크를 붙일 수 있다.
[구글로 가기](https://google.com)

![깃허브로고](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

```

## 마크다운은 엔터 하나로 줄이 안바뀐다...
줄바꿈 안됨
이 문장은 이어져서 나온다

줄바꿈 하고 싶다면 끝에 공백 2칸을 넣고  
엔터를 치거나

한칸 띄워야 한다.
```md
줄바꿈 안됨
이 문장은 이어져서 나온다

줄바꿈 하고 싶다면 끝에 공백 2칸을 넣고  
엔터를 치거나

한칸 띄워야 한다.
```

## 백틱 사용법

`백틱을 앞뒤로 입력하면` 이렇게 화면에 출력됩니다.

``` md
백틱 ` 3개 이상으로 코드 블럭을 만들 수 있다.
    `````
    백틱 안에 백틱을 넣으려면 이렇게 갯수를 늘리는 식으로 변화를 주어야한다.
    `````
```
```html
<!DOCTYPE html>
<html> 
<head> // 백틱 옆에 html, py 같은 약자로 언어를 지정 가능
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>마크다운 예시</title>
</head>
<body> 
	
</body>
</html>
```

```js
// 자바스크립트 같은 것도 가능
let name = "루온";
console.log(name);
```


## 📌 참고 링크
- [GitHub 마크다운 공식 문서](https://docs.github.com/en/get-started/writing-on-github)
