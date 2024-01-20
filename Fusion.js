//Fusion Softworks Communicator


class Fusion {
GetLatestCommitFromRepositry(RepositryName) 
{
fetch("https://api.github.com/repos/Fusion-Softworks-LLC/"+RepositryName+"/commits")
.then(res => res.json())
.then(res => {
return "Latest Commit \n Commiter:"+res[0].commit.author.name+"\n Message:"+res[0].commit.message
})
}
}