import { portfolioContent } from "@/content/portfolio";

export default function SocialPreviewImage() {
  const { identity } = portfolioContent;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        padding: "56px",
        background:
          "linear-gradient(135deg, #090b10 0%, #111827 60%, #173e83 100%)",
        color: "#f4f5f8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-210px",
          right: "-90px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(36, 185, 232, 0.34), rgba(36, 185, 232, 0) 70%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-340px",
          left: "180px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 139, 69, 0.2), rgba(255, 139, 69, 0) 70%)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#9be7ff",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "3px",
          }}
        >
          <span
            style={{
              display: "flex",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#24b9e8",
            }}
          />
          PORTFOLIO · LAGOS, NIGERIA
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "76px",
                fontWeight: 700,
                letterSpacing: "-4px",
              }}
            >
              {identity.displayName}
            </div>
            <div
              style={{
                marginTop: "16px",
                color: "#75d9f5",
                fontSize: "38px",
                fontWeight: 600,
              }}
            >
              {identity.primaryTitle}
            </div>
            <div
              style={{
                marginTop: "18px",
                color: "#c2cada",
                fontSize: "23px",
              }}
            >
              React.js · UI/UX design · Graphic design
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "290px",
              flexDirection: "column",
              gap: "15px",
              padding: "24px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.08)",
            }}
          >
            {[
              "Responsive interfaces",
              "User-focused design",
              "Visual communication",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#edf3fb",
                  fontSize: "18px",
                }}
              >
                <span
                  style={{
                    color: "#75d9f5",
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  0{index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "18px",
            color: "#c2cada",
            fontSize: "18px",
          }}
        >
          <span>{identity.fullName}</span>
          <span>emmanuel-804.netlify.app</span>
        </div>
      </div>
    </div>
  );
}
