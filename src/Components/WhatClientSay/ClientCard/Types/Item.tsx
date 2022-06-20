export type AvatarProps = {
        profileImg: string;
        username: string;
        role: string;
        rate: number;
    }

export type ItemType = {
    id: number,
    text: string,
    user: AvatarProps
};


