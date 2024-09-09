
import { ThemePalette, ThemePreset } from "./theme/components";
import ThemeMode from "./theme/components/ThemeMode";

const ThemeWrapper = () => {

    return (
        <main className="flex min-h-screen flex-col items-center  bg-primary-900 dark:bg-primary-dark dark:text-white">


            <div className="flex flex-col justify-center items-start gap-3 w-full p-2 md:max-w-[70%]">
                <ThemeMode />
                <ThemePreset />
                <ThemePalette />
            </div>


            {/* color palette */}


        </main>
    );
};

export default ThemeWrapper;




