import Header from '@/components/Header';
import MainSection from '@/components/MainSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}