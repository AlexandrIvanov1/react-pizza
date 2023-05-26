import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="133" r="125" />
        <rect x="0" y="276" rx="10" ry="10" width="280" height="30" />
        <rect x="-1" y="326" rx="10" ry="10" width="280" height="90" />
        <rect x="114" y="432" rx="25" ry="25" width="160" height="45" />
        <rect x="9" y="439" rx="15" ry="15" width="90" height="30" />
    </ContentLoader>
)