import BannerTitle from "@/components/BannerTitle"

const information = {
    titulo:"insumos",
    descripcion:"Podras encontrar distintos articulos  para el cuidado de tus plantas"

}

const Insumos = () => {
    return (
        <div>
            <BannerTitle titulo={information.titulo} descripcion={information.descripcion} />
        </div>
    )
}

export default Insumos