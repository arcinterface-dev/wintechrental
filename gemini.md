# Master Instruction: WinTech Equipment Rental Website Development

## 1. Project Overview
- **Project Name:** WinTech Equipment Rental
- **Business Type:** B2B Marine & Offshore Equipment Rental (Specializing in Electric Mooring Winches).
- **Core Units:** - 20T Pull / 30T Brake Holding (2 Units).
    - 30T Pull / 40T Brake Holding (2 Units).
- **Target Region:** UAE and GCC (Contractors, Shipyards, EPC Companies).
- **Primary Goal:** A high-performance, SEO-friendly static landing page with direct WhatsApp redirection for lead generation.

## 2. Technical Stack & Architecture
- **Architecture:** Static Website (Single Page Application layout).
- **Framework:** HTML5 and Tailwind CSS.
- **Styling Methodology:** - **Developer-Friendly SCSS:** The project must use a modular SCSS structure (e.g., `_header.scss`, `_hero.scss`, `_equipment.scss`, `_variables.scss`).
    - **Clean HTML Policy:** Do NOT clutter HTML tags with long strings of Tailwind utility classes (e.g., avoid `<div class="flex items-center justify-between p-4 bg-gray-900 border-b...">`).
    - **Abstraction:** Use Tailwind's `@apply` directive within the SCSS files to manage styling. The HTML should remain clean with semantic class names (e.g., `<header class="main-header">`).
- **Interactivity:** Vanilla JavaScript for scroll animations, sticky navigation, and WhatsApp link logic.
- **Icons:** Lucide Icons or FontAwesome.

## 3. Reference Analysis Instructions
I am providing **10 sample images (sample1.webp through sample10.webp)** representing various industrial and rental website designs.
- **Action:** Analyze each image section-by-section.
- **Selection:** Identify and extract the best UI components from each (e.g., the Header from Sample 10, Equipment Cards from Sample 4, etc.).
- **Synthesis:** Combine these high-performing elements into a single, cohesive wireframe and code structure for WinTech.

## 4. Site Content & Structure
- **Navbar:** Logo, Equipment, Services, About Us, and a "Contact" CTA.
- **Hero:** Impactful headline: "Electric Mooring Winch Rental Solutions." Subtext regarding UAE/GCC operations and fast mobilization.
- **Equipment Catalog:** Detailed specs for 20T and 30T units, highlighting Pulling and Brake Holding capacities.
- **Services:** Temporary Mooring, Loadout Operations, Barge Positioning, and Marine/Yard Operations.
- **About Section:** Established Jan 2024; focus on reliability and industrial expertise.
- **Contact/Footer:** - **Operational Base:** Dubai Industrial City, UAE.
    - **Corporate Office:** AL BAHAR-205, Al Khabeesi, Dubai.
    - **Primary Contact:** +971 54 575 1720
    - **Email:** wintech.rental@gmail.com

## 5. Functionality & SEO
- **WhatsApp Integration:** All "Inquire" buttons must redirect to `https://wa.me/971545751720`.
- **SEO Keywords:** Focus metadata on "Electric Winch Rental Dubai," "Marine Equipment Rental UAE," and "Barge Mooring Solutions GCC."
- **Code Quality:** Ensure the file structure (HTML, SCSS, JS) is organized so that other developers can easily understand the hierarchy and contribute without refactoring.
