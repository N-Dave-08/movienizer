import { CallToAction } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Header />
			<Hero />
			<Features />
			<CallToAction />
			<Footer />
		</div>
	);
}
