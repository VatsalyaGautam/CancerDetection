import { cn } from "@/lib/utils";
import { Marquee } from "../ui/Home/marquee";

const reviews = [
  {
    name: "Amit",
    username: "@amit",
    body: "This AI-powered cancer detection system is a game changer. Early diagnosis is now easier and more accessible.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "The accuracy of this AI model is remarkable. It can truly save lives by detecting cancer in its early stages.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "Impressed by the precision and efficiency. A must-have technology for modern healthcare!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Neha",
    username: "@neha",
    body: "Revolutionary AI for cancer detection! This will change how we diagnose diseases forever.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "As a doctor, I find this AI incredibly helpful in diagnosing lung and breast cancer early. Great work!",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "This technology can bridge the gap in rural healthcare by providing instant cancer detection results.",
    img: "https://avatar.vercel.sh/ananya",
  },
  {
    name: "Suresh",
    username: "@suresh",
    body: "Brilliant AI innovation! This will help oncologists with faster and more accurate reports.",
    img: "https://avatar.vercel.sh/suresh",
  },
  {
    name: "Meera",
    username: "@meera",
    body: "With AI like this, we can ensure early-stage cancer detection, which means more lives saved!",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Arjun",
    username: "@arjun",
    body: "The future of healthcare is here! This AI is going to transform cancer diagnostics.",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Riya",
    username: "@riya",
    body: "I'm amazed by the accuracy of this system. AI-powered detection is the future of medicine.",
    img: "https://avatar.vercel.sh/riya",
  },
  {
    name: "Karthik",
    username: "@karthik",
    body: "Finally, AI is being used where it truly matters. This project is going to save thousands of lives.",
    img: "https://avatar.vercel.sh/karthik",
  },
  {
    name: "Swati",
    username: "@swati",
    body: "The level of detail in the detection reports is outstanding. AI is revolutionizing oncology!",
    img: "https://avatar.vercel.sh/swati",
  },
  {
    name: "Ramesh",
    username: "@ramesh",
    body: "This project gives hope to millions. AI-powered detection is the next big leap in cancer treatment.",
    img: "https://avatar.vercel.sh/ramesh",
  },

  {
    name: "Vivek",
    username: "@vivek",
    body: "Medical technology is evolving, and this project is leading the way in AI-driven cancer detection!",
    img: "https://avatar.vercel.sh/vivek",
  },
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const chunkedReviews = chunkArray(reviews, Math.ceil(reviews.length / 4));

const firstRow = chunkedReviews[0] || [];
const secondRow = chunkedReviews[1] || [];
const thirdRow = chunkedReviews[2] || [];
const fourthRow = chunkedReviews[3] || [];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
