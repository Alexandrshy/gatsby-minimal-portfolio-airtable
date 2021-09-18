export type AirtableBlog = {
  allAirtable: {
    nodes: [
      {
        recordId: string
        data: {
          short_description: string
          title: string
          description: {
            childMarkdownRemark: {
              html: string
              timeToRead: number
            }
          }
          status: string
          slug: string
          date: string
        }
      }
    ]
  }
}
