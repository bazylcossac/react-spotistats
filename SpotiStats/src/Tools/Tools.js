const spacedFollowers = (followers) => {
    const str = followers.toString()
     const reversed = str.split('').reverse().join('');
     const spacedReversed = reversed.replace(/(.{3})/g, '$1 ');
     return spacedReversed.split('').reverse().join('').trim()
 }

const popularityWidth = (popularity) => {
    const firstValue =  popularity / 100
    
     return (firstValue * 12).toFixed(0)
} 

export {spacedFollowers, popularityWidth}
