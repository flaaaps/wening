export interface Project {
    id: number
    tags: string[]
    title: string
    description: string
    description_de: string
    previewImg: string
    links: ProjectLink[]
}

interface ProjectLink {
    type: "twitter" | "github" | "website"
    iconUrl: string
    url: string
}

export const data: Project[] = [
    {
        id: 0,
        title: "Dragonfly",
        description:
            "is a minecraft client which provides useful features and tremendous animations. The website not only includes the overview page, but also a store, a dashboard and an ideas platform.",
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
        title: "Findrrz",
        description: "is a tool to find new music based on your favorite artists!",
        description_de: "ist ein Tool um neue Musik basierend auf deinen Lieblingskünstlern zu finden!",
        links: [
            {
                iconUrl: "https://content.wening.me/personal/icons/github.svg",
                type: "github",
                url: "https://github.com/flaaaps/findrrz",
            },
        ],
        previewImg: "https://content.wening.me/personal/findrrz_preview.png",
        tags: ["React", "Tailwind", "JavaScript"],
    },
]