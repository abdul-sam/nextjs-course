const Docs = ({ params }: {
  params: {
    slug: string[]
  }
}) => {

  if (params.slug?.length === 1) {
    return <div>Docs for {params.slug[0]}</div>
  } else if (params.slug?.length === 2) {
    return <div>Docs for {params.slug[0]} in {params.slug[1]}</div>
  }
  return <div>Docs home page</div>
}


export default Docs;