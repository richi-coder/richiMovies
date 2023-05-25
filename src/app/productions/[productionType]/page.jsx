function ProductionTypePage({ params }) {
  return (
    <div>Page for showing TV shows or Movies</div>
  )
}

export default ProductionTypePage

export const dynamicParams = false; 

export const  generateStaticParams = () => {
  return [{productionType: 'movie'}, {productionType: 'tv'}]
}