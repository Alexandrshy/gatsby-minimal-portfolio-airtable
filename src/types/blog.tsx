export type AirtableBlog = {
  allAirtable: {
    nodes: [
      {
        recordId: string
        data: {
          short_description: {
            childMarkdownRemark: {
              html: string
            }
          }
          title: string
          description: string
          status: string
          slug: string
          date: string
        }
      }
    ]
  }
}
