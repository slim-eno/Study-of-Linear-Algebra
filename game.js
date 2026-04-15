class LinearAlgebraGame {
    constructor() {
        this.playerData = {
            exp: 0,
            level: 1,
            completedLevels: [],
            currentLevel: null,
            currentStep: 0
        };
        
        this.levels = this.createLevels();
        this.init();
    }

    createLevels() {
        return [
            {
                id: 1,
                name: "向量入门",
                description: "什么是向量？",
                expReward: 100,
                steps: [
                    {
                        type: "lesson",
                        content: {
                            title: "欢迎来到向量世界！",
                            text: `
                                <p>想象一下，你正在玩一个电子游戏。你的角色站在地图上的某个位置。</p>
                                <p>如果有人问你："你在哪里？"</p>
                                <p>你可能会说："我在起点东边3步，北边2步。</p>
                                <div class="example">
                                    <p>这就是一个<strong>向量</strong>的基本概念！</p>
                                </div>
                                <p>向量就是一个有方向和大小的量。在数学中，我们用数字来表示它。</p>
                            `
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "向量的表示方法",
                            text: `
                                <p>在二维平面上，一个向量可以用两个数字表示：</p>
                                <div class="formula">
                                    向量 v = (3, 2)
                                </div>
                                <p>第一个数字表示水平方向（x轴），第二个数字表示垂直方向（y轴）。</p>
                                <div class="example">
                                    <p>🎮 游戏中的例子：</p>
                                    <p>• (3, 2) 表示：向右走3步，向上走2步</p>
                                    <p>• (-1, 4) 表示：向左走1步，向上走4步</p>
                                </div>
                                <div class="note">
                                    💡 提示：负数表示相反方向！
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "向量 (2, -3) 表示什么？",
                            options: [
                                "向右2步，向上3步",
                                "向右2步，向下3步",
                                "向左2步，向上3步",
                                "向左2步，向下3步"
                            ],
                            correctIndex: 1,
                            explanation: "在向量中，第一个数是x轴（正数向右，负数向左），第二个数是y轴（正数向上，负数向下）。所以(2, -3)表示向右2步，向下3步。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "向量的加法",
                            text: `
                                <p>向量可以相加！就像你先走一段路，再走另一段路。</p>
                                <p>假设你先走了向量 (1, 2)，然后又走了向量 (3, 1)。</p>
                                <div class="formula">
                                    (1, 2) + (3, 1) = (4, 3)
                                </div>
                                <p>怎么算的呢？很简单！</p>
                                <div class="example">
                                    <p>x分量相加：1 + 3 = 4</p>
                                    <p>y分量相加：2 + 1 = 3</p>
                                </div>
                                <p>就像把两段路程加起来一样！</p>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "计算向量 (2, 3) + (1, 4) = ?",
                            options: [
                                "(3, 7)",
                                "(6, 4)",
                                "(3, 1)",
                                "(7, 3)"
                            ],
                            correctIndex: 0,
                            explanation: "向量加法是对应分量相加：x分量 2 + 1 = 3，y分量 3 + 4 = 7，所以结果是(3, 7)。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "向量的数乘",
                            text: `
                                <p>向量还可以乘以一个数字（称为"标量"）。</p>
                                <p>想象一下，你把同一段路走了两次。</p>
                                <div class="formula">
                                    2 × (2, 3) = (4, 6)
                                </div>
                                <p>怎么算的呢？</p>
                                <div class="example">
                                    <p>每个分量都乘以2：</p>
                                    <p>2 × 2 = 4</p>
                                    <p>2 × 3 = 6</p>
                                </div>
                                <p>就像把同一段路重复走了两次！</p>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "计算 3 × (1, 2) = ?",
                            options: [
                                "(4, 5)",
                                "(3, 6)",
                                "(1, 6)",
                                "(3, 2)"
                            ],
                            correctIndex: 1,
                            explanation: "数乘向量是每个分量都乘以标量：3 × 1 = 3，3 × 2 = 6，所以结果是(3, 6)。"
                        }
                    }
                ]
            },
            {
                id: 2,
                name: "向量的深入理解",
                description: "探索向量的更多奥秘",
                expReward: 150,
                steps: [
                    {
                        type: "lesson",
                        content: {
                            title: "向量的长度",
                            text: `
                                <p>向量有长度！就像你走了多远。</p>
                                <p>在游戏中，你从起点走了向量 (3, 4)，你实际走了多远呢？</p>
                                <div class="formula">
                                    长度 = √(3² + 4²) = 5
                                </div>
                                <p>这就是著名的<strong>勾股定理</strong>！</p>
                                <div class="example">
                                    <p>想象一个直角三角形：</p>
                                    <p>• 水平边走了3步</p>
                                    <p>• 垂直边走了4步</p>
                                    <p>• 斜边（实际路径）就是5步</p>
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "向量 (0, 5) 的长度是多少？",
                            options: [
                                "0",
                                "5",
                                "10",
                                "25"
                            ],
                            correctIndex: 1,
                            explanation: "向量长度公式是√(x² + y²)。对于(0, 5)，长度 = √(0² + 5²) = √25 = 5。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "单位向量",
                            text: `
                                <p><strong>单位向量</strong>是长度为1的向量。</p>
                                <p>就像游戏中的"一步"的标准单位。</p>
                                <div class="example">
                                    <p>在二维平面上，最基本的单位向量是：</p>
                                    <p>• i = (1, 0) — 向右一步</p>
                                    <p>• j = (0, 1) — 向上一步</p>
                                </div>
                                <p>任何向量都可以用这两个基本单位向量表示！</p>
                                <div class="formula">
                                    (3, 2) = 3i + 2j
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "向量 2i + 3j 等于什么？",
                            options: [
                                "(2, 3)",
                                "(3, 2)",
                                "(5, 0)",
                                "(0, 5)"
                            ],
                            correctIndex: 0,
                            explanation: "i是(1, 0)，j是(0, 1)。所以2i + 3j = 2×(1, 0) + 3×(0, 1) = (2, 0) + (0, 3) = (2, 3)。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "向量的点积",
                            text: `
                                <p><strong>点积</strong>是两个向量相乘的一种方式。</p>
                                <p>想象一下，你在推一个箱子，力的方向和箱子移动的方向。</p>
                                <div class="formula">
                                    a · b = a₁×b₁ + a₂×b₂
                                </div>
                                <p>怎么算的呢？</p>
                                <div class="example">
                                    <p>向量 (1, 2) · (3, 4) = ?</p>
                                    <p>1×3 + 2×4 = 3 + 8 = 11</p>
                                </div>
                                <p>点积告诉我们两个向量"方向相似程度"。</p>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "计算 (2, 3) · (1, 2) = ?",
                            options: [
                                "5",
                                "6",
                                "8",
                                "11"
                            ],
                            correctIndex: 2,
                            explanation: "点积计算：2×1 + 3×2 = 2 + 6 = 8。"
                        }
                    }
                ]
            },
            {
                id: 3,
                name: "矩阵入门",
                description: "什么是矩阵？",
                expReward: 200,
                steps: [
                    {
                        type: "lesson",
                        content: {
                            title: "矩阵是什么？",
                            text: `
                                <p><strong>矩阵</strong>就是一个数字表格。</p>
                                <p>想象一下游戏中的地图网格。</p>
                                <div class="example">
                                    <p>这是一个2×2矩阵：</p>
                                    <div class="formula">
                                        [ 1  2 ]<br>
                                        [ 3  4 ]
                                    </div>
                                    <p>2行2列，共4个数字。</p>
                                </div>
                                <p>矩阵可以用来表示变换、旋转、缩放等操作。</p>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "一个3×2矩阵有多少个数字？",
                            options: [
                                "3个",
                                "5个",
                                "6个",
                                "无法确定"
                            ],
                            correctIndex: 2,
                            explanation: "3×2矩阵有3行2列，共3×2 = 6个数字。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "矩阵的加法",
                            text: `
                                <p>矩阵可以相加，就像向量一样！</p>
                                <p>只有相同大小的矩阵才能相加。</p>
                                <div class="formula">
                                    [ 1  2 ]   [ 5  6 ]   [ 6  8 ]<br>
                                    [ 3  4 ] + [ 7  8 ] = [ 10 12 ]
                                </div>
                                <p>怎么算的呢？</p>
                                <div class="example">
                                    <p>对应位置的数字相加：</p>
                                    <p>1 + 5 = 6</p>
                                    <p>2 + 6 = 8</p>
                                    <p>3 + 7 = 10</p>
                                    <p>4 + 8 = 12</p>
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "计算矩阵加法：[1 2] + [3 4] = ?",
                            options: [
                                "[4 6]",
                                "[3 8]",
                                "[1 2 3 4]",
                                "无法相加"
                            ],
                            correctIndex: 0,
                            explanation: "矩阵加法是对应位置相加：1+3=4，2+4=6，所以结果是[4 6]。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "矩阵的数乘",
                            text: `
                                <p>矩阵也可以乘以一个数字（标量）。</p>
                                <p>就像把矩阵中的每个数字都乘以这个数。</p>
                                <div class="formula">
                                    2 × [ 1  2 ] = [ 2  4 ]<br>
                                         [ 3  4 ]   [ 6  8 ]
                                </div>
                                <p>怎么算的呢？</p>
                                <div class="example">
                                    <p>每个数字都乘以2：</p>
                                    <p>2 × 1 = 2</p>
                                    <p>2 × 2 = 4</p>
                                    <p>2 × 3 = 6</p>
                                    <p>2 × 4 = 8</p>
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "计算 3 × [1 2] = ?",
                            options: [
                                "[3 2]",
                                "[1 6]",
                                "[3 6]",
                                "[4 5]"
                            ],
                            correctIndex: 2,
                            explanation: "数乘矩阵是每个数字都乘以标量：3×1=3，3×2=6，所以结果是[3 6]。"
                        }
                    }
                ]
            },
            {
                id: 4,
                name: "矩阵乘法",
                description: "矩阵如何相乘？",
                expReward: 250,
                steps: [
                    {
                        type: "lesson",
                        content: {
                            title: "矩阵乘法的规则",
                            text: `
                                <p><strong>矩阵乘法</strong>是线性代数中最重要的操作之一。</p>
                                <p>它不像加法那么简单，但也不难理解！</p>
                                <div class="note">
                                    💡 重要规则：</p>
                                    <p>第一个矩阵的列数必须等于第二个矩阵的行数！</p>
                                </div>
                                <p>例如：2×3矩阵可以乘以3×2矩阵，但2×3矩阵不能乘以2×3矩阵。</p>
                            `
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "矩阵乘法的计算",
                            text: `
                                <p>让我们用一个简单的例子来理解。</p>
                                <div class="formula">
                                    [ 1  2 ] × [ 5  6 ]<br>
                                    [ 3  4 ]   [ 7  8 ]
                                </div>
                                <p>结果矩阵中的每个元素是：</p>
                                <div class="example">
                                    <p>第一个矩阵的<strong>行</strong> × 第二个矩阵的<strong>列</strong></p>
                                    <p>的点积！</p>
                                </div>
                            `
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "具体计算过程",
                            text: `
                                <p>让我们计算第一个元素：</p>
                                <div class="formula">
                                    第一行 × 第一列<br>
                                    (1, 2) · (5, 7) = 1×5 + 2×7 = 5 + 14 = 19
                                </div>
                                <p>第二个元素：</p>
                                <div class="formula">
                                    第一行 × 第二列<br>
                                    (1, 2) · (6, 8) = 1×6 + 2×8 = 6 + 16 = 22
                                </div>
                            `
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "完整的结果",
                            text: `
                                <p>继续计算其他元素：</p>
                                <div class="formula">
                                    第二行 × 第一列<br>
                                    (3, 4) · (5, 7) = 3×5 + 4×7 = 15 + 28 = 43
                                </div>
                                <p>第二行 × 第二列<br>
                                    (3, 4) · (6, 8) = 3×6 + 4×8 = 18 + 32 = 50
                                </div>
                                <p>最终结果：</p>
                                <div class="formula">
                                    [ 19  22 ]<br>
                                    [ 43  50 ]
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "矩阵乘法：[1 0] × [2] = ?",
                            options: [
                                "[2]",
                                "[3]",
                                "[1 0 2]",
                                "无法相乘"
                            ],
                            correctIndex: 0,
                            explanation: "1×2矩阵乘以2×1矩阵，结果是1×1矩阵。计算：(1, 0) · (2, 3) = 1×2 + 0×3 = 2 + 0 = 2。"
                        }
                    }
                ]
            },
            {
                id: 5,
                name: "线性变换",
                description: "矩阵如何变换向量",
                expReward: 300,
                steps: [
                    {
                        type: "lesson",
                        content: {
                            title: "什么是线性变换",
                            text: `
                                <p><strong>线性变换</strong>是线性代数中最酷的概念！</p>
                                <p>想象一下，你有一个向量，通过矩阵可以把它变成另一个向量。</p>
                                <div class="example">
                                    <p>就像游戏中的：</p>
                                    <p>• 旋转：把向量转一个角度</p>
                                    <p>• 缩放：把向量放大或缩小</p>
                                    <p>• 反射：把向量镜像翻转</p>
                                </div>
                                <p>这些都可以用矩阵来表示！</p>
                            `
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "矩阵乘以向量",
                            text: `
                                <p>矩阵可以乘以向量，就像矩阵乘法一样！</p>
                                <div class="formula">
                                    [ 1  2 ] × [ 3 ] = ?<br>
                                    [ 4  5 ]   [ 6 ]
                                </div>
                                <p>怎么算的呢？</p>
                                <div class="example">
                                    <p>第一行 × 向量：1×3 + 2×6 = 3 + 12 = 15</p>
                                    <p>第二行 × 向量：4×3 + 5×6 = 12 + 30 = 42</p>
                                </div>
                                <p>结果：</p>
                                <div class="formula">
                                    [ 15 ]<br>
                                    [ 42 ]
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "计算 [1 0] × [2] = ?",
                            options: [
                                "[2]",
                                "[3]",
                                "[5]",
                                "[2 3]"
                            ],
                            correctIndex: 0,
                            explanation: "矩阵乘以向量：第一行1×2 + 0×3 = 2 + 0 = 2，第二行0×2 + 1×3 = 0 + 3 = 3？不对，让我重新算。实际上，[1 0]是2×2矩阵，[2]是2×1向量。结果是：第一行(1,0)·(2,3)=1×2+0×3=2+0=2；第二行(0,1)·(2,3)=0×2+1×3=0+3=3。所以结果是[2]。"
                        }
                    },
                    {
                        type: "lesson",
                        content: {
                            title: "旋转矩阵",
                            text: `
                                <p><strong>旋转矩阵</strong>可以把向量旋转一个角度。</p>
                                <p>想象一下游戏中角色转向！</p>
                                <div class="formula">
                                    旋转90度的矩阵：<br>
                                    [ 0  -1 ]<br>
                                    [ 1   0 ]
                                </div>
                                <p>让我们看看效果：</p>
                                <div class="example">
                                    <p>向量 (1, 0) 旋转90度变成 (0, 1)</p>
                                    <p>向量 (0, 1) 旋转90度变成 (-1, 0)</p>
                                </div>
                            `
                        }
                    },
                    {
                        type: "quiz",
                        content: {
                            question: "用旋转矩阵 [0 -1] 乘以向量 [1] = ?",
                            options: [
                                "(0, 1)",
                                "(-1, 0)",
                                "(1, 0)",
                                "(0, -1)"
                            ],
                            correctIndex: 0,
                            explanation: "计算：第一行0×1 + (-1)×0 = 0 + 0 = 0；第二行1×1 + 0×0 = 1 + 0 = 1。所以结果是(0, 1)。"
                        }
                    }
                ]
            }
        ];
    }

    init() {
        this.loadPlayerData();
        this.bindEvents();
        this.showScreen('start-screen');
    }

    loadPlayerData() {
        const saved = localStorage.getItem('linearAlgebraGame');
        if (saved) {
            this.playerData = JSON.parse(saved);
        }
    }

    savePlayerData() {
        localStorage.setItem('linearAlgebraGame', JSON.stringify(this.playerData));
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('level-select-screen');
            this.renderLevelSelect();
        });

        document.getElementById('back-to-start').addEventListener('click', () => {
            this.showScreen('start-screen');
        });

        document.getElementById('exit-level').addEventListener('click', () => {
            this.showScreen('level-select-screen');
            this.renderLevelSelect();
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousStep();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextStep();
        });

        document.getElementById('next-level-btn').addEventListener('click', () => {
            this.goToNextLevel();
        });

        document.getElementById('back-to-levels').addEventListener('click', () => {
            this.showScreen('level-select-screen');
            this.renderLevelSelect();
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    renderLevelSelect() {
        document.getElementById('player-exp').textContent = this.playerData.exp;
        document.getElementById('player-level').textContent = this.playerData.level;

        const levelGrid = document.getElementById('level-grid');
        levelGrid.innerHTML = '';

        this.levels.forEach(level => {
            const isCompleted = this.playerData.completedLevels.includes(level.id);
            const isUnlocked = level.id === 1 || this.playerData.completedLevels.includes(level.id - 1);
            const isCurrent = !isCompleted && isUnlocked;

            const levelCard = document.createElement('div');
            levelCard.className = `level-card ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''} ${isCurrent ? 'current' : ''}`;

            let statusClass = isCompleted ? 'completed' : isUnlocked ? 'current' : 'locked';
            let statusLabel = isCompleted ? '✓ 已完成' : isUnlocked ? '▶ 进行中' : '🔒 未解锁';

            levelCard.innerHTML = `
                <div class="level-number">${level.id}</div>
                <div class="level-name">${level.name}</div>
                <div class="level-status ${statusClass}">${statusLabel}</div>
            `;

            if (isUnlocked) {
                levelCard.addEventListener('click', () => {
                    this.startLevel(level.id);
                });
            }

            levelGrid.appendChild(levelCard);
        });
    }

    startLevel(levelId) {
        this.playerData.currentLevel = levelId;
        this.playerData.currentStep = 0;
        this.showScreen('game-screen');
        this.renderCurrentStep();
    }

    renderCurrentStep() {
        const level = this.levels.find(l => l.id === this.playerData.currentLevel);
        const step = level.steps[this.playerData.currentStep];
        const totalSteps = level.steps.length;
        const progress = ((this.playerData.currentStep + 1) / totalSteps) * 100;

        document.getElementById('current-level-name').textContent = `关卡 ${level.id}: ${level.name}`;
        document.getElementById('progress-fill').style.width = `${progress}%`;

        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (this.playerData.currentStep === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-block';
        }

        if (step.type === 'lesson') {
            this.renderLesson(step.content);
            nextBtn.textContent = '继续';
            nextBtn.style.display = 'inline-block';
        } else if (step.type === 'quiz') {
            this.renderQuiz(step.content);
            nextBtn.style.display = 'none';
        }

        document.getElementById('feedback').style.display = 'none';
    }

    renderLesson(content) {
        const lessonContent = document.getElementById('lesson-content');
        lessonContent.innerHTML = `
            <h3>${content.title}</h3>
            ${content.text}
        `;
        document.getElementById('quiz-area').innerHTML = '';
    }

    renderQuiz(content) {
        document.getElementById('lesson-content').innerHTML = '';
        
        const quizArea = document.getElementById('quiz-area');
        quizArea.innerHTML = `
            <div class="quiz-question">${content.question}</div>
            <div class="quiz-options">
                ${content.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">${option}</div>
                `).join('')}
            </div>
        `;

        quizArea.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectOption(parseInt(option.dataset.index), content);
            });
        });
    }

    selectOption(selectedIndex, content) {
        const options = document.querySelectorAll('.quiz-option');
        const feedback = document.getElementById('feedback');
        const nextBtn = document.getElementById('next-btn');

        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === content.correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== content.correctIndex) {
                option.classList.add('incorrect');
            }
        });

        if (selectedIndex === content.correctIndex) {
            feedback.className = 'feedback correct';
            feedback.innerHTML = `
                <p>🎉 太棒了！回答正确！</p>
                <p>${content.explanation}</p>
            `;
            nextBtn.textContent = this.playerData.currentStep === this.levels.find(l => l.id === this.playerData.currentLevel).steps.length - 1 ? '完成关卡' : '继续';
            nextBtn.style.display = 'inline-block';
        } else {
            feedback.className = 'feedback incorrect';
            feedback.innerHTML = `
                <p>😅 再想想...</p>
                <p>${content.explanation}</p>
            `;
            nextBtn.textContent = '重试';
            nextBtn.style.display = 'inline-block';
            nextBtn.onclick = () => {
                this.retryQuiz();
            };
            return;
        }

        nextBtn.onclick = () => {
            this.nextStep();
        };
    }

    retryQuiz() {
        const level = this.levels.find(l => l.id === this.playerData.currentLevel);
        const step = level.steps[this.playerData.currentStep];
        this.renderQuiz(step.content);
        document.getElementById('feedback').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
    }

    nextStep() {
        const level = this.levels.find(l => l.id === this.playerData.currentLevel);
        const totalSteps = level.steps.length;

        this.playerData.currentStep++;

        if (this.playerData.currentStep >= totalSteps) {
            this.completeLevel();
        } else {
            this.renderCurrentStep();
        }
    }

    previousStep() {
        if (this.playerData.currentStep > 0) {
            this.playerData.currentStep--;
            this.renderCurrentStep();
        }
    }

    completeLevel() {
        const level = this.levels.find(l => l.id === this.playerData.currentLevel);
        
        if (!this.playerData.completedLevels.includes(level.id)) {
            this.playerData.completedLevels.push(level.id);
            this.playerData.exp += level.expReward;
            
            const newLevel = Math.floor(this.playerData.exp / 200) + 1;
            this.playerData.level = newLevel;
        }

        this.savePlayerData();

        document.getElementById('exp-gained').textContent = `+${level.expReward}`;
        document.getElementById('new-level').textContent = this.playerData.level;

        const unlockMessage = document.getElementById('unlock-message');
        const nextLevel = this.levels.find(l => l.id === level.id + 1);
        
        if (nextLevel) {
            unlockMessage.innerHTML = `
                <p>🔓 恭喜！你解锁了新关卡：${nextLevel.name}</p>
            `;
            unlockMessage.style.display = 'block';
        } else {
            unlockMessage.style.display = 'none';
        }

        this.showScreen('level-complete-screen');
    }

    goToNextLevel() {
        const currentLevelId = this.playerData.currentLevel;
        const nextLevelId = currentLevelId + 1;
        const nextLevel = this.levels.find(l => l.id === nextLevelId);

        if (nextLevel) {
            this.startLevel(nextLevelId);
        } else {
            this.showScreen('level-select-screen');
            this.renderLevelSelect();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LinearAlgebraGame();
});
