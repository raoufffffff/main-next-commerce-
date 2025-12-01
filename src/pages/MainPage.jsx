import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom' // 1. Import useLocation

import Hero from '../Components/Hero'
import Features from '../Components/Features'
import SimplicitySection from '../Components/SimplicitySection'
import Pricing from '../Components/Pricing'
import CTA from '../Components/CTA'

const MainPage = () => {
    const location = useLocation();

    useEffect(() => {
        // 2. Check if there is a hash in the URL (e.g., #pricing)
        if (location.hash) {
            // 3. Remove the '#' character to get the element ID
            const elementId = location.hash.substring(1);
            const element = document.getElementById(elementId);

            // 4. If the element exists, scroll to it
            if (element) {
                // Optional: setTimeout helps if the page takes a split second to render
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]); // Re-run this effect if the location changes

    return (
        <div>
            {/* 5. Add IDs to your sections so the scroller can find them */}

            <div id="hero">
                <Hero />
            </div>

            <div id="features">
                <Features />
            </div>

            <div id="simplicity">
                <SimplicitySection />
            </div>

            {/* This matches /#pricing */}
            <div id="pricing">
                <Pricing />
            </div>

            <div id="cta">
                <CTA />
            </div>
        </div>
    )
}

export default MainPage