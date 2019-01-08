class Github{
    constructor(){
        this.client_id = '1fde936feb222a689c53';
        this.client_secret = '3ecbf0b7e2f0016ca103c3743b8bf07cd90132f0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile, 
            repos
        }
    }
}