import BackTop from "@/components/BackTop"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import SocialMediaButton from "@/components/SocialMediaButton"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col min-h-screen">
            <NavBar />
            {children}
            <Footer />
            <SocialMediaButton />
            <BackTop />
        </section>


    )
}