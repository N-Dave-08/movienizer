import { Eye, Film, ListPlus, Search, Sparkles, Star } from "lucide-react";

const features = [
	{
		icon: Eye,
		title: "Track Watched Movies",
		description:
			"Keep a comprehensive log of all the movies you've seen, with dates and notes.",
	},
	{
		icon: ListPlus,
		title: "Create Custom Watchlists",
		description:
			"Build personalized watchlists for movies you want to see, categorized however you like.",
	},
	{
		icon: Search,
		title: "Discover New Films",
		description:
			"Explore a vast database of movies, filter by genre, year, and more.",
	},
	{
		icon: Star,
		title: "Rate & Review",
		description:
			"Share your opinions by rating movies and writing detailed reviews.",
	},
	{
		icon: Sparkles,
		title: "Personalized Recommendations",
		description:
			"Get tailored movie suggestions based on your viewing history and preferences.",
	},
	{
		icon: Film,
		title: "Detailed Movie Info",
		description:
			"Access cast, crew, plot summaries, trailers, and more for every film.",
	},
];

export const Features = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Everything You Need to Manage Your Movies
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
							From tracking what you've watched to discovering new gems,
							Movienizer has you covered.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 justify-items-center">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div key={feature.title} className="grid gap-1 text-center">
								<div className="flex justify-center mb-2">
									<IconComponent className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-lg font-bold">{feature.title}</h3>
								<p className="text-sm text-muted-foreground">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
