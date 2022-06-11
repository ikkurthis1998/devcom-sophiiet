import { FC } from "react";

export const BlogCard: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-secondary-default font-bold font-text subpixel-antialiased flex-grow text-center">
                Blog 1
            </h2>
            <p className="text-secondary-default font-text subpixel-antialiased flex-grow text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris euismod, nunc eget euismod consectetur, nunc
                nisi porta nunc, euismod consectetur nunc nisi porta
                nunc.
            </p>
        </div>
    );
}