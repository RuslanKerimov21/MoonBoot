const AnimationBlock = document.querySelectorAll('[data-animation="true"]');
const ArrayCheckAnimation = Array(AnimationBlock.length).fill(false);

const handleCheckVisibilityBlock = () => {
    for (let i = 0; i < AnimationBlock.length; i++) {
        const check = AnimationBlock[i].getBoundingClientRect();
        if (check.top >= -100 && check.bottom <= (window.innerHeight + 100) && check.left >= 0 && check.right <= window.innerWidth) {
            if (!ArrayCheckAnimation[i]) {
                setTimeout(() => { AnimationBlock[i].classList.add('view_active') }, i <= 4 ? (i * 200) : (i * 50));
                ArrayCheckAnimation[i] = true;
            }
        }
        else {
            if (ArrayCheckAnimation[i]) {
                AnimationBlock[i].classList.remove("view_active");
                ArrayCheckAnimation[i] = false;
            }
        };
    };
};

handleCheckVisibilityBlock();

window.addEventListener('scroll', handleCheckVisibilityBlock);