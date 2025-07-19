import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 border-t">
			<div className="container px-4 md:px-6 mx-auto text-center space-y-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Ready to Take Control of Your Movie Collection?
				</h2>
				<p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
					Join thousands of movie lovers who are already using Movienizer to
					enhance their cinematic journey.
				</p>
				<div className="flex justify-center">
					<Button asChild size="lg">
						<Link href="#">Start Organizing Your Movies</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
