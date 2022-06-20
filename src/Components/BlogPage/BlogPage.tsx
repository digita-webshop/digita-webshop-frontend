import { useState } from 'react'
import Pagination from '../Pagination/Pagination'
import { Grid } from '@mui/material'
import ArticleCard from './Components/Articles/Article/ArticleCard'
import SearchBar from './Components/SideBar/SearchBar/SearchBar'
import RecentPosts from './Components/SideBar/RecentPosts/RecentPosts'
import RecentComments from './Components/SideBar/RecentComments/RecentComments'
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs'
import { articlesBlogPage } from '../../Services/Utils/Data/data'

function BlogPage() {
  const [articles] = useState(articlesBlogPage)
  const [articlesPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  )
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <CustomBreadcrumbs title={'blog'} />
      <Grid
        container
        sx={{ py: 6.25, px: '15px', maxWidth: '1200px', mx: 'auto', my: 0 }}
      >
        <Grid item md={9}>
          <Grid container>
            {currentArticles.map((article) => (
              <ArticleCard
                title={article.title}
                image={article.image}
                author={article.author}
                releaseDate={article.releaseDate}
                status={article.status}
              />
            ))}
          </Grid>
          <Pagination
            productsPerPage={articlesPerPage}
            totalProducts={articles.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SearchBar></SearchBar>
          <RecentPosts></RecentPosts>
          <RecentComments></RecentComments>
        </Grid>
      </Grid>
    </>
  )
}

export default BlogPage
