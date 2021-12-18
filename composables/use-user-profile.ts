type ProfileAttrs = {
    username?: string,
    website?: string,
    avatar_url?:string,
}

const GET_COL_SET = `username, website, avatar_url`

export const useUserProfile = () => {
    const auth = useAuth()
    const profile = useFrom()('profiles')
    const getUserProfile = (id: string) => profile.select(GET_COL_SET).eq('id', id).single()
    const getCurrentUserProfile = () => getUserProfile(auth.user()!.id)
    const updateCurrentUserProfile = (attrs: ProfileAttrs) => profile.upsert({ ...attrs, id: auth.user()!.id, updated_at: new Date()})

    return {
        getUserProfile,
        getCurrentUserProfile,
        updateCurrentUserProfile
    }
}
