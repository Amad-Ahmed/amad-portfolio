import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings">
        <div className="text-Snow text-lg font-semibold">{data.title}</div>

        <div className="text-sm text-LightGray font-normal space-y-1">
          {Array.isArray(data.desc) ? (
            <ul className="list-disc list-inside">
              {data.desc.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{data.desc}</p>
          )}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
