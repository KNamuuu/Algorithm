function solution(genres, plays) {
    var answer = [];
    
    // {classic: 1450, pop: 3100} O
    // 추후에 Object.entries로 [key, value]의 배열화 예정
    const playsByGenres = {};
    
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        playsByGenres[genre] = playsByGenres[genre] ? playsByGenres[genre] + play : play;
    }
    
    const playsRank = Object.entries(playsByGenres);
    playsRank.sort((a, b) => b[1] - a[1]);
    
    // [{genres: classic, index: 0, plays: 500}, ...]
    const music = [];
    
    for(let i = 0; i < genres.length; i++) {
        const el = {genre: genres[i], play: plays[i], index: i};
        music.push(el);
    }
    
    for(const [genre, play] of playsRank) {
        const filteredMusicArr = music.filter((item) => item.genre === genre).sort((a, b) => {
            if(a.play !== b.play) return b.play - a.play
            else return a.index - b.index;
        });
        
        for(let i = 0; i < 2; i++) {
            filteredMusicArr[i] && answer.push(filteredMusicArr[i].index);
        }
    }

    return answer;
}