import Image from "next/image";

const ArticleCard = ({
  isActive,
  artikel,
}: {
  isActive: boolean;
  artikel: any;
}) => {
  return (
    <div
      className={`cursor-pointer group transition-all duration-1000 border-l border-black ${
        isActive ? "w-[40%]" : "w-[30%]"
      } flex-shrink-0`}
    >
      <div
        className={`relative w-full ${
          isActive ? "h-[35vh]" : "h-[30vh]"
        } border flex items-center overflow-hidden transition-all`}
      >
        <Image
          src={artikel.imageUrl}
          alt="artikel-img"
          className="object-cover group-hover:scale-110 transition-all"
          fill
        />
      </div>

      <div className="p-16 space-y-4 flex-1">
        <h3>{artikel.title}</h3>
        <p className="bodytext-2">{artikel.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
