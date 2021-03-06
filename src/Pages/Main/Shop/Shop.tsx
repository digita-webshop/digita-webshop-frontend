// import { Grid, Container, useMediaQuery, Fade } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { Fragment, useState } from "react";
// import {
//   ShopCategoriesFilter,
//   ShopColorFilter,
//   ShopPriceFilter,
//   ShopFiltersDrawer,
//   ShopToolbar,
//   CustomBreadcrumbs,
//   Pagination,
// } from "../../../Components";
// import ProductItem from "../../../Components/Products/Components/ProductItem/ProductItem";
// import { productData } from "../../../Services/Utils/Data/data";

import { Shop as ShopPage } from "../../../Components";

// function Shop() {
//   const [displayDrawer, setDisplayDrawer] = useState(false);
//   const [products] = useState(productData);
//   const [productsPerPage] = useState(12);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedLayout, setSelectedLayout] = useState({
//     grid: true,
//     list: false,
//   });

//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up("md"));

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const toggleDrawer = (open: boolean) => {
//     setDisplayDrawer(open);
//   };

//   return (
//     <>
//       <CustomBreadcrumbs title={"products"} />
//       <Container sx={{ marginY: "50px" }}>
//         <Grid container columnSpacing={4}>
//           {matches && (
//             <Grid item xs={3.5}>
//               <ShopCategoriesFilter />
//               <ShopColorFilter drawer={true} />
//               <ShopPriceFilter drawer={true} />
//             </Grid>
//           )}
//           {!matches && (
//             <ShopFiltersDrawer
//               displayDrawer={displayDrawer}
//               toggleDrawer={toggleDrawer}
//             />
//           )}
//           <Grid item xs={12} md={8.5}>
//             <ShopToolbar
//               matches={matches}
//               toggleDrawer={toggleDrawer}
//               setSelectedLayout={setSelectedLayout}
//               selectedLayout={selectedLayout}
//             />
//             <Grid container spacing={{ xs: 2, md: 3 }}>
//               {currentProducts.map((item) => (
//                 <Fragment>
//                   {selectedLayout.grid && (
//                     <Fade in={selectedLayout.grid}>
//                       <Grid item xs={6} sm={4} md={4} key={item.id}>
//                         <ProductItem
//                           id={item.id}
//                           name={item.name}
//                           image={item.image}
//                           offPrice={item.offPrice}
//                           price={item.price}
//                           sold={item.sold}
//                           starRate={item.starRate}
//                           description={item.description}
//                           listView={false}
//                         />
//                       </Grid>
//                     </Fade>
//                   )}
//                   {selectedLayout.list && (
//                     <Fade in={selectedLayout.list}>
//                       <Grid item xs={12}>
//                         <ProductItem
//                           id={item.id}
//                           name={item.name}
//                           image={item.image}
//                           offPrice={item.offPrice}
//                           price={item.price}
//                           sold={item.sold}
//                           starRate={item.starRate}
//                           description={item.description}
//                           listView={true}
//                         />
//                       </Grid>
//                     </Fade>
//                   )}
//                 </Fragment>
//               ))}
//             </Grid>
//             <Pagination
//               productsPerPage={productsPerPage}
//               totalProducts={products.length}
//               paginate={paginate}
//               currentPage={currentPage}
//               setCurrentPage={setCurrentPage}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default Shop;
function Shop() {
  return <ShopPage />;
}

export default Shop;
