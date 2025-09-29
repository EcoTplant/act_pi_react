import React, {Fragment} from 'react';
import './App.css';
import Head from 'next/head';
import ItemCard from '../componentes/ItemCard';
import SectionHeading from '../componentes/SectionHeading';
import CategoryCard from '../componentes/CategoryCard';
import BlogPostCard from '../componentes/BlogPostCard';


export default function App() {
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/"; // Redirige a la página principal
    }
  };

  return (
    <div className="home-container10">
      <Head>
        <title>Mediclick</title>
        <meta property="og:title" content="Mediclcick" />
      </Head>
      <div className="home-navbar1">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-navbar2">
            <button onClick={handleLogout} className="logout-button">Volver a la página de inicio de sesion  </button>
           <div className="home-container11">
  <div className="search-container">
  <span className="search-icon">🔍</span>
  <input
    type="text"
    placeholder="buscar"
    className="home-textinput input"
  />

   
  </div>
</div>
            <div className="home-middle1">
        <div className="home-left1">
                <span className="navbar-link">TIENDA</span>
                <span className="navbar-link">ESPECIAL</span>
              </div>
              <span className="navbar-logo-title">MEDICLICK</span>
              <div className="home-right1">
                <span className="navbar-link">ACERCA</span>
                <span className="navbar-link">BLOG</span>
                <span className="navbar-link">CONTACTO</span>
              </div>
            </div>
            <div className="home-icons">
              <img
                alt="iconsbxscart3271299"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K"
                className="home-image2"
              />
              <img
                alt="iconsbxsheartcircle3271300"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="home-image3"
              />
              <img
                alt="AccountCircle3271301"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                className="home-image4"
              />
            </div>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container12">
                <span className="home-logo-center2">MOBILLIO</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle2">
                <span className="home-text15">SHOP</span>
                <span className="home-text16">LOOKBOOK</span>
                <span className="home-text17">SPECIAL</span>
                <span className="home-text18">ABOUT</span>
                <span className="home-text19">BLOG</span>
                <span className="home-text20">CONTACT</span>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero1 section-container">
          <div className="home-max-width1 max-width-container">
            <div className="home-hero2">
              <div className="home-container13">
                <div className="home-info">
                  <img
                    alt="Rectangle43271305"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                    className="home-image5"
                  />
                  <span className="home-text21">
                    Mejor amigo de los doctores
                  </span>
                </div>
                <h1 className="home-text22 Heading-1">Acetaminofén</h1>
                <div className="home-container14">
                  <span className="home-text23">DESDE</span>
                  <span className="home-text24">$1</span>
                </div>
                <div className="home-btn-group">
                  <button className="button">Explore the collection</button>
                </div>
              </div>
              <img
                alt="image23271449"
                src="https://www.unimarksa.com/sites/default/files/imgproductos/acetaminofen-325-mg.png"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="Comprar por categorías"
              subtitle="Empieza a comprar por las categorías que te interesen."
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard
                name="Antiinflamatorios"
                text={
                  <Fragment>
                    <span className="home-text25">Antiinflamatorios</span>
                  </Fragment>
                }
                subtitle="Empieza a comprar por las categorias que prefieras"
                categoryImg="https://images.unsplash.com/photo-1729708273852-b63222c8b35d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGFudGlpbmZsYW1hdG9yeXxlbnwwfHx8fDE3NTgwODIzODF8MA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name="Analgésicos"
                text={
                  <Fragment>
                    <span className="home-text26">Analgésicos</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1519161720427-f7711f9efce3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxhbnRpaW5mbGFtYXRvcnl8ZW58MHx8fHwxNzU4MDgyMzgxfDA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name="Antipiréticos"
                text={
                  <Fragment>
                    <span className="home-text27">Antipiréticos</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1616526628217-c21fd2eef624?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhbnRpaW5mbGFtYXRvcnl8ZW58MHx8fHwxNzU4MDgyMzgxfDA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name="Antibióticos"
                text={
                  <Fragment>
                    <span className="home-text28">Antibióticos</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1631980839248-1a84a60c66ac?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxhbnRpaW5mbGFtYXRvcnl8ZW58MHx8fHwxNzU4MDgyMzgxfDA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name=" Laxantes y Antidiarreicos"
                text={
                  <Fragment>
                    <span className="home-text29">
                      {' '}
                      Laxantes y Antidiarreicos
                    </span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1612110520339-d83941ba2b9b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxhbnRpaW5mbGFtYXRvcnl8ZW58MHx8fHwxNzU4MDgyMzgxfDA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name="Antivirales"
                text={
                  <Fragment>
                    <span className="home-text30">Antivirales</span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1740592754365-2117f5977528?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhbnRpaW5mbGFtYXRvcnl8ZW58MHx8fHwxNzU4MDgyMzgxfDA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
              <CategoryCard
                name="Collections"
                text={
                  <Fragment>
                    <span className="home-text31">
                      <span>Medicamentos Cardiovasculares</span>
                      <br></br>
                      <br></br>
                      Desks
                    </span>
                  </Fragment>
                }
                categoryImg="https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhbnRpaW5mbGFtYXRvcnl8ZW58MHx8fHwxNzU4MDgyMzgxfDA&amp;ixlib=rb-4.1.0&amp;w=1100"
              ></CategoryCard>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container15">
              <h3 className="home-text35 Heading-3">MEDICLICK</h3>
              <span className="home-text36">FARMACIA ONLINE</span>
            </div>
          </div>
          <div className="home-container16 max-width-container">
            <div className="home-container17">
              <span className="home-text37">
                <span>
                 <br></br> En MediClick nacemos con una misión clara: revolucionar la
                  forma en que cuidas de tu bienestar y el de tu familia. Somos
                  mucho más que una farmacia online; somos tu partner de
                  confianza en salud, ofreciéndote un acceso seguro, rápido y
                  sencillo a medicamentos y productos de bienestar, con el
                  respaldo de expertos farmacéuticos.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                alt="M3271427"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTk5JyBoZWlnaHQ9JzIwMCcgdmlld0JveD0nMCAwIDE5OSAyMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00zNy4zMDI2IDcxLjI5MjVMOTkuMzgyNyAxODIuMzEzTDE2MS40NjMgNzEuMjkyNUwxNzUuNjIyIDIwMEgxOTguNzY1TDE3NS42MjIgMEw5OS4zODI3IDEzNy45NTlMMjMuMTQzOSAwTDAgMjAwSDIzLjE0MzlMMzcuMzAyNiA3MS4yOTI1WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4wNicvPgo8L3N2Zz4K"
                className="home-svg"
              />
              <button className="button">Leer mas acerca de nosotros</button>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <SectionHeading
              heading="MEDICAMENTOS MAS COMPRADOS"
              subtitle="Explore los medicamentos mas comprados durante este mes."
            ></SectionHeading>
            <div className="home-gallery">
  <ItemCard
    name="Ibuprofeno"
    value="5"
    imageSrc="https://calox.com/wp-content/uploads/2022/12/Ibuprofeno-400.png"
  />
  <ItemCard
    name="Naproxeno"
    value="3"
    imageSrc="https://cdn.eurofarma.com.br/wp-content/uploads/2016/10/Naproxeno.png"
  />
  <ItemCard
    name="Difenhidramina"
    value="5"
    imageSrc="https://www.medipanpanama.com/wp-content/uploads/2021/06/DIFENHIDRAMINA-MP-COMP-PRODUCTO.png"
  />
  <ItemCard
    name="Aspirina"
    value="7"
    imageSrc="https://www.aspirina.com.mx/sites/g/files/vrxlpx53376/files/2024-05/Aspirina_tabletas_500_mg_empaque_lateral_derecho.png"
  />
  <ItemCard
    name="Amoxicilina"
    value="10"
    imageSrc="https://www.lasanteca.com/userfiles/2018/12/AMOXICILINA-500MG-CAJA-POR-50-CAPSULAS-CON-BLISTER.jpg"
  />
</div>
                  
                
              
          
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <SectionHeading
              heading="Nuestro Blog"
              subtitle="Lea acerca de las preguntas mas comunes."
              rootClassName="section-headingroot-class-name"
            ></SectionHeading>
           <div className="home-container18">
  <BlogPostCard
    newProp="¿Paracetamol o Ibuprofeno? Guía para elegir el adecuado"
    imageSrc="https://png.pngtree.com/png-vector/20240615/ourmid/pngtree-confused-girl-thinking-vector-png-image_12749274.png"
  />
  <BlogPostCard
    title="Omeprazol"
    newProp="Todo sobre el Omeprazol: Usos, dosis y mitos"
    imageSrc="https://img.freepik.com/vector-premium/mujer-apuntando-arriba-bombilla-encendida-arriba-persona-tiene-idea-aislado-sobre-fondo-blanco_737577-21.jpg?semt=ais_hybrid&amp;w=740&amp;q=80"
  />
  <BlogPostCard
    title="Botiquín de Primeros Auxilios en Casa"
    newProp="Cómo Crear un Botiquín de Primeros Auxilios en Casa"
    subtitle="Las preguntas mas frecuentes de nuestros clientes."
    imageSrc="https://centraldesuministrosgs.com/wp-content/uploads/2024/01/BOTIQUIN-MALETIN.png"
  />
</div>
          </div>
        </div>
      </div>
      <div className="home-footer1">
        <div className="max-width-container">
          <footer className="home-footer2">
            <div className="home-container19">
              <h3 className="home-text40 Heading-3">MEDICLICK</h3>
              <span className="home-text41">
                4517 Ave. Bello, Medellin 39495, Colombia
              </span>
              <span className="home-text42">(671) 555-0110</span>
              <span className="home-text43">contact@mediclick.com</span>
            </div>
            <div className="home-links-container">
              <div className="home-container20">
                <span className="home-text44">Categorías</span>
                <span className="home-text45">Antiinflamatorios</span>
                <span className="home-text46">Analgésicos</span>
                <span className="home-text47">Antipiréticos</span>
                <span className="home-text48">Antibióticos</span>
                <span className="home-text49"> Laxantes y Antidiarreicos</span>
                <span className="home-text50">Antivirales</span>
              </div>
              <div className="home-container21">
                <span className="home-text51">
                  <span>Empresa</span>
                  <br></br>
                </span>
                <span className="home-text54">Tienda</span>
                <span className="home-text55">Especial</span>
                <span className="home-text56">Acerca</span>
                <span className="home-text57">Blog</span>
              </div>
              <div className="home-container22">
                <span className="home-text58">Recursos</span>
                <span className="home-text59">Contáctanos</span>
                <span className="home-text60">Ordena</span>
                <span className="home-text61">Ubica tu orden</span>
                <span className="home-text62">Envios</span>  
              </div>
            </div>
            
          </footer>
        </div>
      </div>
    </div>
  );
}