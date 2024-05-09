import { useState } from "react";
import "./navbar_admin.css";

function Navbar_admin() {

    const [userType, setUserType] = useState('');

//   useEffect(() => {
//     // obtiene el valor de una cookie por su nombre
//     const getCookie = (name) => {
//       const value = `; ${document.cookie}`;
//       const parts = value.split(`; ${name}=`);
//       if (parts.length === 2) return parts.pop().split(';').shift();
//     };

//     // recupera user_type de las cookies
//     const userCookie = getCookie('user_type');

//     // compara si el user_type es admin
//     if (userCookie && userCookie === 'admin') {
//       setUserType('admin');
//     }
//   }, []);

   
    
  return (
    // userType === 'admin' ? (

    // <section className="navbar_admin">
    //     <Link to="/gestion-usuarios" className="option_admin">
    //       <img src="/images/icons/icon_users_female.svg" alt="Icon users" className="option_admin--img" />
    //       <section className="option_admin--text">Gestión usuarios</section>
    //     </Link>

    //     <Link to="/gestion-videos" className="option_admin">
    //       <img src="/images/icons/icon_video.svg" alt="Icon videos" className="option_admin--img" />
    //       <section className="option_admin--text">Gestión vídeos</section>
    //     </Link>

    //     <Link to="/gestion-preguntas" className="option_admin">
    //       <img src="/images/icons/icon_question.svg" alt="Icon videos" className="option_admin--img" />
    //       <section className="option_admin--text">Gestión preguntas</section>
    //     </Link>

    //     <Link to="/gestion-recetas" className="option_admin">
    //       <img src="/images/icons/icon_recipe.svg" alt="Icon recetas" className="option_admin--img" />
    //       <section className="option_admin--text">Gestión recetas</section>
    //     </Link>
    //   </section>

        <section className="navbar_admin">
            <section className="option_admin users">
                <img src="/images/icons/icon_users_female.svg" alt="Icon users" className="option_admin--img" />
                <section className="option_admin--text">Gestión usuarios</section>
            </section>

            <section className="option_admin video">
                <img src="/images/icons/icon_video.svg" alt="Icon videos" className="option_admin--img" />
                <section className="option_admin--text">Gestión vídeos</section>
            </section>

            <section className="option_admin question">
                <img src="/images/icons/icon_question.svg" alt="Icon videos" className="option_admin--img" />
                <section className="option_admin--text">Gestión preguntas</section>
            </section>

            <section className="option_admin recipe">
                <img src="/images/icons/icon_recipe.svg" alt="Icon recetas" className="option_admin--img" />
                <section className="option_admin--text">Gestión recetas</section>
            </section>
        </section>
        // ) : null
    );
}

export default Navbar_admin;
