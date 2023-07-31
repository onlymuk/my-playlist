// import apiClient from "../../spotify";
// import { useEffect } from "react";

export default function Category() {
  //   const [categories, setCategories] = useState(null);
  const url = "http://localhost:3000/categories/toplists";
  console.log(url);
  //   useEffect(() => {
  //     apiClient
  //       .get(`browse/categories/${categories.id}`)
  //       .then(function (response) {
  //         setCategories(response.data.categories.items);
  //       });
  //   }, []);

  //   const navigate = useNavigate();

  //   const CategoriesToPly = (id) => {
  //     navigate(`/player`, { state: { id: id } });
  //   };

  //   return (
  //     <div className="screen-container">
  //       <div className="content">
  //         <h2>Category</h2>
  //         <h2>Category</h2>
  //       </div>
  //       <div className="category-body">
  //         {categories?.map((category) => (
  //           <div
  //             className="category-card"
  //             key={category.id}
  //             onClick={() => goCategories(category.id)}
  //           >
  //             <img
  //               src={category.icons[0].url}
  //               alt="category-icons"
  //               className="category-image"
  //             />
  //             <p className="category-title">{category.name}</p>
  //             <div className="category-fade">
  //               <IconContext.Provider value={{ size: "50px", color: "#3D6AF1" }}>
  //                 <AiFillPlayCircle />
  //               </IconContext.Provider>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
}
