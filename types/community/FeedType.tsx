export interface communityFeedType{
    
  commentList: {
    commentList: [
      {
        comment: string,
        id: number,
        user: {
          address: string,
          birthday: string,
          email: string,
          name: string,
          nickname: string,
          phoneNumber: string
        }
      }
    ]
  },
  content: string,
  createdAt: string,
  title: string,
  type: string,
  user: {
    address: string,
    birthday: string,
    email: string,
    name: string,
    nickname: string,
    phoneNumber: string
  }
}
