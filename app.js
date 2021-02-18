class DrumKit 
{
    constructor() 
    {
        this.playButton = document.querySelector('.play');
        this.pads = document.querySelectorAll('.pad');
        this.kickAudion = document.querySelector('.kick-sound');
        this.snareAudion = document.querySelector('.snare-sound');
        this.hihatAudion = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }

    activePad()
    {
        this.classList.toggle('active');
    }

    repeat()
    {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        this.index++; 
    }

    start()
    {
        const interval = (60/this.bmp) * 1000;
        setInterval(() => 
        {
            this.repeat();
        }, interval);
    }
}


const drumKit = new DrumKit();

drumKit.pads.forEach(pad => 
    {
        pad.addEventListener('click', drumKit.activePad);
    })
drumKit.playButton.addEventListener('click', () => 
{
    drumKit.start();
});