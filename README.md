# javascript-lunch

우아한테크코스 레벨1 점심 뭐 먹지 미션

# 기능 요구사항

# Domain

- [x] 음식점을 카테고리별로 필터링 한다.
- [x] 음식점을 이름순, 거리순으로 정렬한다.
- [x] 음식점 등록 폼을 제출하면 추가한다.
- [x] 추가하기 버튼을 클릭할 경우 입력에 대한 유효성 검증을 한다
  - 음식점 이름은 10글자 이하여야한다.
  - 음식점 설명은 300자 이하여야한다.
  - 유효한 참고 링크인지 검증한다.
- [x] 음식점 이름으로 식당의 정보를 찾을 수 있도록 한다.
- [x] 유효한 입력일 경우 localStorage에 추가한다.
- [x] 자주 가는 음식점인지 아닌지에 대해 상태를 변경(토글)한다.
- [x] 자주 가는 음식점 목록을 필터링한다.
- [x] 음식점 목록에 있는 음식점을 삭제한다.

```ts
addFavoriteRestaurant(restaurantName ; string) : boolean
getFavoriteRestaurant() : Restaurant[]
delete(restaurantName : string) : boolean
```

# UI

## header

- UI
  - [x] 점심 뭐 먹지 타이틀
  - [x] 음식점 추가 버튼
- Event
  - [x] 음식점 추가 버튼을 클릭하면 음식점 추가 폼 모달이 보여져야한다.

## option-selector

- UI

- [x] 카테고리를 필터링할 수 있는 옵션 버튼
- [x] 이름, 거리순을 정렬할 수 있는 옵션 버튼

- Event

- [x] 카테코리를 선택하면 선택된 카테고리에 해당되는 레스토랑 리스트를 보여준다
- [x] 이름, 거리순을 정렬하는 버튼을 클릭하면 정렬된 레스토랑 리스트를 보여준다.

## restaurant-list

- UI

- [x] restaurant-item

  - 음식점 목록을 확인할 수 있다.
  - 카테고리
  - 레스토랑 이름
  - (캠퍼스로 부터의) 거리
  - 설명, 설명은 2줄 이상이 넘어가면 ...으로 내용을 숨긴다

- Event

- [x] 카테고리별 필터링, 정렬 옵션이 변경되는 이벤트가 발생하면 그에 맞춰 보여줘야 할 음식점 목록을 변경한다.
- [x] 모든 음식점, 자주 가는 음식점을 클릭할 경우 그에 맞춰 보여줘야 할 음식점 목록을 변경한다.

## category-image

- UI

- [x] 전체, 한식, 중식,,, 등 카테고리에 따라 다른 이미지를 보여준다.

## restaurant-detail

- UI
- 음식점 목록 중 하나를 클릭하면 해당 음식점에 대한 세부 정보를 나타낸다.

  - [x] 음식점 이름, 카테고리, 캠퍼스로부터의 거리, 자주 가는 음식점인지의 여부
  - [x] 음식점 상세 설명, ...으로 표시하지 않고 모든 내용을 보여준다,
  - [x] 참고링크

- Event

- [x] 음식점 세부 정보의 바깥 영역을 클릭하거나, 닫기 버튼을 클릭하면 `restaurant-detail` 컴포넌트는 사라져야한다.
- [x] 음식점 세부 정보에서 자주 가는 음식점인지의 여부를 변경하면, 변경이 반영되어야한다.
- [x] 참고 링크를 클릭하면 해당 링크로 이동시킨다.
- [x] 삭제하기 버튼을 클릭할 경우, 해당 음식점을 삭제한 후 `restaurant-detail` 컴포넌트는 사라져야한다.

## restaurant-tab

- UI

- [x] 식당 목록 선택 옵션 (모든 음식점, 자주 가는 음식점)
- [x] 클릭한 버튼에 액티브 스타일이 적용되어야 하며, 이전에 클릭한 버튼의 액티브 스타일은 사라져야한다.

- Event

- [x] 특정 버튼을 클릭할 때마다, 보여줘야 할 음식점 목록의 변경을 트리거한다.

## restaurant-add-form

- UI

- [x] 새로운 음식점 타이틀
- [x] 카테코리 선택 옵션 (한식, 중식, 일식, 양식, 아시안, 기타)
- [x] (캠퍼스로부터 도보로) 걸리는 시간 (5, 10, 15, 20, 30)
- [x] 설명
- [x] 참고링크
- [x] 취소, 추가 버튼
- [ ] 유효하지 않은 입력값이 들어온 경우 해당 입력값 아래에 빨간색 에러 메시지를 보여준다.

- Event

- [x] 취소 버튼을 클릭하면 추가 폼을 리셋하고 닫는다.
- [x] 추가하기 버튼을 클릭하면 추가 폼을 닫고, 추가된 레스토랑을 레스토랑 리스트에 반영한다.
- [x] 추가 폼 외부를 클릭 시 폼을 닫는다. 외부를 클릭할 경우 입력한 값들을 리셋하지 않고 닫기만 한다.
