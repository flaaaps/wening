export interface Project {
    id: number
    tags: string[]
    title: ProjectTitle
    description: string
    description_de: string
    previewImg: string
    links: ProjectLink[]
}

type ProjectTitle = {
    color: string
    content: string
}

type ProjectLink = {
    type: "twitter" | "github" | "website"
    iconUrl: string
    url: string
}

export const data: Project[] = [
    {
        id: 0,
        title: {
            color: "#F98452",
            content: "Dragonfly",
        },
        description: "is a minecraft client which provides useful features and tremendous animations.",
        description_de:
            "ist ein Minecraft-Client, der nützliche Funktionen und cleane Animationen bietet. Die Website enthält nicht nur die Übersichtsseite, sondern auch einen Online Shop, ein Dashboard und eine Ideenplattform.",
        links: [
            {
                iconUrl: "https://content.wening.me/personal/icons/twitter.svg",
                type: "twitter",
                url: "https://twitter.com/dragonflyclient",
            },
            {
                iconUrl: "https://content.wening.me/personal/icons/github.svg",
                type: "github",
                url: "https://github.com/DragonflyClient",
            },
        ],
        previewImg: "https://content.wening.me/personal/dragonfly_background.png",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 1,
        title: { color: "#4D7EDC", content: "Findrrz" },
        description: "helps you find new music based on your favorite artists!",
        description_de: "hilft dir neue Musik basierend auf deinen Lieblingskünstlern zu finden!",
        links: [
            {
                iconUrl: "https://content.wening.me/personal/icons/github.svg",
                type: "github",
                url: "https://github.com/flaaaps/findrrz",
            },
            {
                iconUrl: "https://content.wening.me/personal/icons/external-link.svg",
                type: "website",
                url: "https://findrrz.hardboun.de/",
            },
        ],
        previewImg: "https://content.wening.me/personal/findrrz_preview.png",
        tags: ["React", "Tailwind", "TypeScript"],
    },
]
