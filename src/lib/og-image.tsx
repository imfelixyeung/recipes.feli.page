export const OgImage = ({
    title,
    caption,
}: {
    title: string;
    caption: string;
}) => {
    const titleFontSize = title.length > 32 ? 52 : 68;

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "28px",
                background:
                    "linear-gradient(135deg, #fdf6ec 0%, #f6e3c7 45%, #f0d3a8 100%)",
                fontFamily: "'Google Sans Flex', system-ui, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6b4a2b",
                    border: "3px solid #d9b27e",
                    borderRadius: "60px",
                    padding: "16px 36px",
                    fontSize: "40px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                }}
            >
                Recipes
            </div>
            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    color: "#3e2a1e",
                    maxWidth: "900px",
                    fontSize: `${titleFontSize}px`,
                    fontWeight: 700,
                    lineHeight: 1.15,
                }}
            >
                {title}
            </div>
            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    color: "#8a6641",
                    fontSize: "34px",
                }}
            >
                {caption}
            </div>
        </div>
    );
};
