// Copyright 2024 Saideep
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive = {setActive}>
                <Link href={'/'}>
                <MenuItem setActive={setActive} active={active} item = "Home">
                </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item = "Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All Courses</HoveredLink>
                <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
                <HoveredLink href="/seo">Advanced Composition</HoveredLink>
                <HoveredLink href="/branding">Songwriting</HoveredLink>
                <HoveredLink href="/branding">Music Production</HoveredLink>
                </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item = "Contact Us">
                </MenuItem>
            </Menu>
        </div>
    )
}