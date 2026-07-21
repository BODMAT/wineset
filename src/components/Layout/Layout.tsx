import { Outlet } from "react-router-dom";
import { FixedHeader } from "../FixedHeader/FixedHeader";
import { FixedFooter } from "../FixedFooter/FixedFooter";

export function Layout() {
    return (
        <div className="min-h-screen overflow-hidden flex flex-col relative">
            <FixedHeader />
            <main className="flex-auto">
                <Outlet />
            </main>
            <FixedFooter />
        </div>
    );
}
