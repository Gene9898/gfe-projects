import React from "react";

const Challenge1 = () => {
	return (
		<div className="flex justify-center bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen w-screen font-serif">
			<div class="mt-[200px] bg-white flex flex-col rounded-lg w-[340px] h-[233px] p-[24px] gap-4 shadow-md">
				<div class="flex flex-row gap-4">
					<img
						src="profile-thumbnail.png"
						alt="Profile Picture"
						width="48"
						height="48"
					/>
					<div>
						<h1 class="text-lg font-semibold">Sarah Dole</h1>
						<p class="text-neutral-600 text-sm">@sarahdole</p>
					</div>
				</div>
				<p class="text-neutral-600 text-base">
					I've been searching for high-quality abstract images for my design
					projects, and I'm thrilled to have found this platform. The variety
					and depth of creativity are astounding!
				</p>
			</div>
		</div>
	);
};

export default Challenge1;
