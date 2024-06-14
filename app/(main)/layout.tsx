import { Footer } from "./(components)/footer";
import { Navbar } from "./(components)/navbar";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full">
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default MainLayout;