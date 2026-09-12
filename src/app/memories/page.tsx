import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Memories from '@/components/Memories';

export const metadata: Metadata = {
  title: 'Memories & Milestones — Mudunuri Lokesh Varma',
  description: 'Hackathons, Research Activities, Academic Milestones & Moments of Mudunuri Lokesh Varma',
};

export default function MemoriesPage() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden pt-28 sm:pt-36 pb-20">
      <Header />
      <main className="section-padding">
        <Memories />
      </main>
      <Footer />
    </div>
  );
}
