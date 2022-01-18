// bucket.js

// 액션 생성
const CREATE = 'bucket/CREATE';

// 초기값 설정
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// 액션 생성 함수
export function createBucket(bucket) {
  return {type: CREATE, bucket: bucket}
}


// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return {list: new_bucket_list}
    }
    default: return state;
  }
}