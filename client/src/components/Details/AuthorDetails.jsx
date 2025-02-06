import { HOST_SERVER } from "../../lib/constants";
import { isEmptyObject } from "../../lib/utils";

const AuthorDetails = ({ item }) => {
  return (
    <>
      {/* Metadata */}
      <div className="mt-3 flex">
        <div className="ml-0 flex w-full items-center justify-between sm:block md:ml-3">
          {!isEmptyObject(item.author) && (
            <>
              <p className="mb-3 text-base font-semibold text-gray-200 md:text-lg">
                <span>بقلم </span>
                {item.author.name}
              </p>
              <pre className="hidden w-full text-sm font-semibold text-gray-200 md:block md:text-base">
                {item.author.title}
              </pre>
            </>
          )}

          {/* Date */}
          <p className="justify-self-left mt-2 w-fit text-sm font-semibold text-white sm:justify-self-auto">
            نشر في {new Date(item.createdAt).toLocaleDateString("Ar-eg")}
          </p>
        </div>
        {!isEmptyObject(item.author) && (
          <img
            loading="lazy"
            src={
              item.author?.image ?
                `${HOST_SERVER}/imgs/${item.author?.image}`
              : `/images/profile.png`
            }
            className="hidden size-16 rounded-full object-cover sm:block lg:size-24"
            alt={item.author.name}
          />
        )}
      </div>
    </>
  );
};

export default AuthorDetails;
