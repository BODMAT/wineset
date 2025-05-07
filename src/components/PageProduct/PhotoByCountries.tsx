import { getCountryRegion } from "../../utils/utils";

export function PhotoByCountries({ country }: { country: string | undefined }) {
    const region = country ? getCountryRegion(country) : null;

    return (
        <div className="max-w-[122px] flex flex-col gap-[25px] items-center justify-center w-full [&>img]:w-[122px] [&>img]:h-[122px] [&>img]:object-cover max-md:flex-row max-md:!mx-auto max-md:text-center max-[450px]:[&>img]:w-[82px] max-[450px]:[&>img]:h-[82px]">
            {country && region === "europe" && (
                <>
                    <img src={`${import.meta.env.BASE_URL}PageProduct/e1.jpg`} alt="europe 1" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/e2.jpg`} alt="europe 2" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/e3.jpg`} alt="europe 3" />
                </>
            )}

            {country && region === "asia" && (
                <>
                    <img src={`${import.meta.env.BASE_URL}PageProduct/a1.jpg`} alt="asia 1" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/a2.jpg`} alt="asia 2" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/a3.webp`} alt="asia 3" />
                </>
            )}

            {country && region === "other" && (
                <>
                    <img src={`${import.meta.env.BASE_URL}PageProduct/u1.jpg`} alt="other 1" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/u2.jfif`} alt="other 2" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/u3.jfif`} alt="other 3" />
                </>
            )}

            {!country && (
                <>
                    <img src={`${import.meta.env.BASE_URL}PageProduct/u1.jpg`} alt="other 1" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/u2.jfif`} alt="other 2" />
                    <img src={`${import.meta.env.BASE_URL}PageProduct/u3.jfif`} alt="other 3" />
                </>
            )}
        </div>
    );
}
