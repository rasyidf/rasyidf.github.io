function SvgMascot(props) {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 465 473"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <g clipPath="url(#mascot_svg__clip0)">
                <mask
                    id="mascot_svg__a"
                    style={{
                        maskType: "alpha",
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={-27}
                    width={433}
                    height={433}
                >
                    <circle cx={216.5} cy={189.5} r={216.5} fill="#C4C4C4" />
                </mask>
                <g mask="url(#mascot_svg__a)">
                    <path className="fill-primary-50"
                        d="M119.138 139.957c35.561-31.341 86.19-42.86 139.261-47.272 53.297-4.655 109.034-2.201 146.01 25.973 37.212 28.164 55.662 82.048 51.135 130.186-4.763 48.148-32.728 90.794-66.969 130.688-33.994 40.116-74.489 77.723-119.701 83.188-44.987 5.222-95.164-21.677-133.696-58.394-38.542-36.949-65.687-83.937-68.772-132.907-3.32-48.959 17.171-100.122 52.732-131.462z"

                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 278 298"
                            to="360 273 298"
                            dur="9s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path fill="url(#mascot_svg__pattern0)" d="M162 16h182v372H162z" />
                </g>
            </g>
            <defs>
                <clipPath id="mascot_svg__clip0">
                    <path fill="#fff" d="M0 0h465v473H0z" />
                </clipPath>
                <pattern
                    id="mascot_svg__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#mascot_svg__image0"
                        transform="matrix(.00196 0 0 .00096 -.011 0)"
                    />
                </pattern>
                <image
                    id="mascot_svg__image0"
                    width={522}
                    height={1044}
                    href="https://res.cloudinary.com/hafari/image/upload/v1633706883/rasyid_ztgotf.png" />
            </defs>
        </svg>
    );
}

export default SvgMascot;