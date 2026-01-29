import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- DATABASE PRODOTTI ---
const PRODUCTS = [
    {
        id: "p1",
        title: "NEURO - LEXIS",
        category: "IMPLANTABLE SENSOR",
        // NEURO LEXIS (INVARIATO)
        contentHTML: `
            <div class="p-breadcrumb">HOME // PRODUCTS // <span>NEURO LEXIS</span></div>
            
            <h1 class="p-title">NEURO LEXIS</h1>
            <p class="p-subtitle-lead">NANODUST SENSOR // FULLY DEPLOYABLE.</p>
            
            <div class="visual-integrated">
                <img src="neuro_lexis.png" class="p-image-small" alt="Neuro Lexis Blueprint">
                
                <div class="img-hotspot hs-top-right"><span>BIO-SHELL</span></div>
                <div class="img-hotspot hs-bottom-left"><span>INDUCTIVE</span></div>
                <div class="img-hotspot hs-bottom-right"><span>GRAPHENE</span></div>
            </div>

            <div class="split-row">
                <span class="split-label">MECHANISM OF ACTION</span>
                <div class="split-text">
                    <p class="mb-4">
                        The device operates as a <strong>pre-conscious gatekeeper</strong>. Installed via nasal inhalation, the nanodust settles on the <em>Angular Gyrus</em>, forming a mesh network that intercepts semantic electrical potentials.
                    </p>
                    <p>
                        Unlike traditional BCIs which read motor output, Neuro Lexis decodes the <em>intent</em> to speak approximately 200ms before the brain signals the vocal cords. This allows for seamless, imperceptible linguistic correction.
                    </p>
                </div>
            </div>

            <div class="split-row" style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span class="split-label">HARDWARE SPECS</span>
                <div style="width: 100%;">
                    <table class="data-table">
                        <tr><td>PARTICLE SIZE</td><td>45μm (Microns)</td></tr>
                        <tr><td>MESH DENSITY</td><td>12k Nodes / cm²</td></tr>
                        <tr><td>FREQUENCY</td><td>450 THz (Optical)</td></tr>
                        <tr><td>REJECTION</td><td>< 0.01%</td></tr>
                        <tr><td>ENCRYPTION</td><td>Quantum AES-512</td></tr>
                    </table>
                </div>
            </div>

            <div class="split-row">
                <span class="split-label">TARGET ANATOMY</span>
                <div class="split-text">
                    <p class="mb-4">
                        <strong>Broca's Area (Brodmann 44/45):</strong> 
                        Primary interface for syntactic override. Used to restructure sentence complexity and emotional tone.
                    </p>
                    <p>
                        <strong>Wernicke's Area (Brodmann 22):</strong> 
                        Secondary loop for auditory feedback suppression. Ensures the user does not perceive the alteration in their own speech.
                    </p>
                </div>
            </div>

            <div class="quotes-section">
                <div class="quote-block">
                    <p class="quote-text">"We didn't just bridge the gap between thought and speech; we eliminated the friction of conscience entirely."</p>
                    <span class="quote-author">DR. ARIS THORNE // LEAD NEURAL ENGINEER</span>
                </div>
                
                <div class="quote-block" style="border-color: #333;">
                    <p class="quote-text">"Clinical trials in Sector 7 show a 99.4% reduction in dissident verbalization within 48 hours of deployment."</p>
                    <span class="quote-author">FRAGMA INTERNAL REPORT // Q1 2025</span>
                </div>
            </div>

            <div class="compliance-footer">
                <div class="compliance-list">
                    <span class="comp-item">ISO-13485 (NEURAL)</span>
                    <span class="comp-item">NATO-STANAG 4569</span>
                    <span class="comp-item">FDA CLASS III (PENDING)</span>
                </div>
                <div class="legal-text">
                    WARNING: UNAUTHORIZED REMOVAL OF NEURO LEXIS MAY CAUSE PERMANENT APHASIA OR SYNAPTIC CASCADE FAILURE. THIS DEVICE IS CLASSIFIED AS MILITARY-GRADE MUNITION UNDER THE GENEVA COGNITIVE PROTOCOLS (2028). USE ONLY UNDER SUPERVISION OF A CERTIFIED NEURO-ETHICIST. FRAGMA CORP ACCEPTS NO LIABILITY FOR LOSS OF EGO-IDENTITY.
                </div>
            </div>
        `,
        vector: new THREE.Vector3(10, 3, 0)
    },
    {
        id: "p2",
        title: "SYNAPSE OVERLAY",
        category: "KERNEL SOFTWARE",
        // AGGIORNAMENTO: Header Uniformato a Neuro Lexis
        contentHTML: `
            <div class="p-breadcrumb">HOME // PRODUCTS // <span>SYNAPSE OVERLAY</span></div>
            
            <h1 class="p-title">SYNAPSE OVERLAY</h1>
            <p class="p-subtitle-lead">KERNEL LEVEL ROOTKIT // DIGITAL PHENOTYPING.</p>

            <div class="visual-integrated">
                <img src="synapse.png" class="p-image-small" alt="Synapse Architecture">
                
                <div class="img-hotspot hs-top-right">
                    <span>ROOT ACCESS</span>
                </div>
                <div class="img-hotspot hs-bottom-left">
                    <span>BIO-FEEDBACK</span>
                </div>
                <div class="img-hotspot hs-bottom-right">
                    <span>PHENOTYPE ENGINE</span>
                </div>
            </div>

            <div class="split-row">
                <span class="split-label">KERNEL INTEGRATION</span>
                <div class="split-text">
                    <p class="mb-4">
                        <strong>Synapse Overlay</strong> is not an application; it is an environment. Installed at <em>Ring 0 (Kernel Mode)</em>, it operates beneath the threshold of the operating system's awareness, acting as a symbiotic translator between binary code and biological wetware.
                    </p>
                    <p>
                        By hijacking the display driver pipeline, it creates a subliminal layer of information—flicker rates, color temperature micro-shifts—that bypasses the optic nerve's conscious filter to communicate directly with the amygdala.
                    </p>
                </div>
            </div>

            <div class="split-row" style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span class="split-label">SOFTWARE SPECS</span>
                <div style="width: 100%;">
                    <table class="data-table">
                        <tr><td>INSTALLATION</td><td>Rootkit / BIOS Injection</td></tr>
                        <tr><td>CPU OVERHEAD</td><td>< 0.5% (Silent Mode)</td></tr>
                        <tr><td>TARGET</td><td>Endocrine Regulation</td></tr>
                        <tr><td>OUTPUT VECTOR</td><td>Cortisol / Dopamine</td></tr>
                        <tr><td>COMPATIBILITY</td><td>All Retinal Displays</td></tr>
                    </table>
                </div>
            </div>

            <div class="split-row">
                <span class="split-label">THE CORTISOL LOOP</span>
                <div class="split-text">
                    <p class="mb-4">
                        The system monitors user interaction (keystroke dynamics, pupil dilation) to establish a baseline <strong>Digital Phenotype</strong>. Once calibrated, it initiates the <em>Control Loop</em>.
                    </p>
                    <p>
                        Need higher productivity? The Overlay spikes blue light frequencies to trigger Adrenaline. Need pacification? It introduces micro-latency patterns that induce a hypnotic, dopamine-receptive state. The user feels it as "mood"; we know it as code.
                    </p>
                </div>
            </div>

            <div class="quotes-section">
                <div class="quote-block">
                    <p class="quote-text">"We stopped programming computers years ago. With Synapse, we finally started programming the user."</p>
                    <span class="quote-author">DR. ELENA VANCE // CHIEF PSYCHOGRAPHIC OFFICER</span>
                </div>
                
                <div class="quote-block" style="border-color: #333;">
                    <p class="quote-text">"The most elegant prison ever built. It has no bars, only pixels."</p>
                    <span class="quote-author">WIRED UNDERGROUND // LEAKED MEMO</span>
                </div>
            </div>

            <div class="compliance-footer">
                <div class="compliance-list">
                    <span class="comp-item">CLASSIFIED (LEVEL 5)</span>
                    <span class="comp-item">NO-EXPORT LICENSE</span>
                    <span class="comp-item">BIO-HAZARD (DIGITAL)</span>
                </div>
                <div class="legal-text">
                    WARNING: PROLONGED USE OF SYNAPSE OVERLAY WITHOUT CALIBRATION MAY RESULT IN CHRONIC ADRENAL FATIGUE, DISSOCIATIVE IDENTITY DISORDER, OR PERMANENT RETINAL DESENSITIZATION. FRAGMA CORP CLAIMS OWNERSHIP OF ALL PSYCHOMETRIC DATA GENERATED DURING OPERATION.
                </div>
            </div>
        `,
        vector: new THREE.Vector3(-8, 5, 4)
    },
    {
        id: "p3",
        title: "SYNTAX F1",
        category: "EXPERIENTIAL MACHINE",
        contentHTML: `
            <div class="p-breadcrumb">HOME // PRODUCTS // <span>SYNTAX F1</span></div>
            
            <h1 class="p-title">SYNTAX F1</h1>
            <p class="p-subtitle-lead">HAPTIC RHETORIC ENGINE // PHYSICAL INTERFACE.</p>

            <div id="syntax-model-viewer" style="width: 100%; height: 400px; position: relative; margin-bottom: 60px; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1);"></div>

            <div class="split-row">
                <span class="split-label">CONCEPT</span>
                <div class="split-text">
                    <p class="mb-4">
                        Language has mass. The <strong>Syntax F1</strong> assigns physical weight and velocity to semantic structures. The operator does not simply write; they <em>drive</em> the narrative.
                    </p>
                    <p>
                        This is a high-performance console designed for real-time reality manipulation. Using advanced force-feedback knobs and holographic data fields, the user can physically feel the resistance of a hostile crowd or the momentum of a viral trend.
                    </p>
                </div>
            </div>

            <div class="p-section compact dark">
                <span class="section-heading">HARDWARE CONFIGURATION</span>
                <table class="data-table">
                    <tr><td>CHASSIS</td><td>Reinforced Carbon Fiber Monocoque</td></tr>
                    <tr><td>DISPLAY</td><td>Volumetric Holographic Field (8K)</td></tr>
                    <tr><td>IO INTERFACE</td><td>Haptic Knobs / Neural Link</td></tr>
                    <tr><td>PROCESSOR</td><td>Dual Quantum-Core (Liquid Cooled)</td></tr>
                    <tr><td>POWER</td><td>4.5 kW (Peak Draw)</td></tr>
                </table>
            </div>

            <div class="metrics-section" style="padding: 60px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span class="split-label" style="margin-bottom: 30px; display:block;">OPERATIONAL LOAD</span>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center;">
                    
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 90px; height: 90px; border-radius: 50%; border: 1px solid #333; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; position: relative;">
                            <span style="font-family: 'TT Hoves Pro', sans-serif; font-size: 1.5rem; color: #fff;">450</span>
                        </div>
                        <span style="font-family: 'Input Mono', monospace; font-size: 10px; color: #666;">PETAFLOPS</span>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 90px; height: 90px; border-radius: 50%; border: 1px solid #333; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; position: relative;">
                            <span style="font-family: 'TT Hoves Pro', sans-serif; font-size: 1.5rem; color: #fff;">0.4</span>
                        </div>
                        <span style="font-family: 'Input Mono', monospace; font-size: 10px; color: #666;">LATENCY (S)</span>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 90px; height: 90px; border-radius: 50%; border: 1px solid #333; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; position: relative;">
                            <span style="font-family: 'TT Hoves Pro', sans-serif; font-size: 1.5rem; color: #EB5335;">A+</span>
                        </div>
                        <span style="font-family: 'Input Mono', monospace; font-size: 10px; color: #666;">STABILITY</span>
                    </div>

                </div>
            </div>

            <div class="quotes-section">
                <div class="quote-block">
                    <p class="quote-text">"It feels less like writing a speech and more like drifting a Formula 1 car through a burning library."</p>
                    <span class="quote-author">TEST SUBJECT 09 // POST-SESSION DEBRIEF</span>
                </div>
            </div>

            <div class="compliance-footer">
                <div class="compliance-list">
                    <span class="comp-item">PROTOTYPE</span>
                    <span class="comp-item">RESTRICTED ACCESS</span>
                </div>
                <div class="legal-text">
                    WARNING: HIGH-VELOCITY SEMANTIC SHIFTS MAY CAUSE COGNITIVE VERTIGO. OPERATORS MUST PASS PSYCH-EVAL LEVEL 5.
                </div>
            </div>
        `,
        vector: new THREE.Vector3(2, -8, -5)
    }
];

// ... RESTO DEL CODICE THREE.JS ...
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 35);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(container.clientWidth, container.clientHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
container.appendChild(labelRenderer.domElement);

const controls = new OrbitControls(camera, labelRenderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.minDistance = 15;
controls.maxDistance = 45;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;

const geometry = new THREE.IcosahedronGeometry(10, 2); 
const wireframeGeo = new THREE.WireframeGeometry(geometry);
const wireframeMat = new THREE.LineBasicMaterial({ 
    color: 0xaaaaaa, 
    transparent: true,
    opacity: 0.5 
});
const sphereLines = new THREE.LineSegments(wireframeGeo, wireframeMat);
scene.add(sphereLines);

const blockerGeo = new THREE.IcosahedronGeometry(9.9, 2);
const blockerMat = new THREE.MeshBasicMaterial({ color: 0x010101 });
const blockerSphere = new THREE.Mesh(blockerGeo, blockerMat);
scene.add(blockerSphere);

const labelElements = [];

PRODUCTS.forEach((prod) => {
    const pos = prod.vector.clone().normalize().multiplyScalar(10);

    const dotGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dotMesh = new THREE.Mesh(dotGeo, dotMat);
    dotMesh.position.copy(pos);
    scene.add(dotMesh);

    const div = document.createElement('div');
    div.className = 'node-label';
    div.textContent = prod.title;
    
    div.addEventListener('click', () => {
        openProduct(prod, div);
    });

    const label = new CSS2DObject(div);
    label.position.copy(pos);
    label.position.multiplyScalar(1.1);
    scene.add(label);
    
    labelElements.push(div);
});

const emptyState = document.getElementById('empty-state');
const contentWrapper = document.getElementById('content-wrapper');

// VARIABILI GLOBALI PER IL VIEWER 3D
let syntaxRenderer, syntaxScene, syntaxCamera, syntaxControls, syntaxFrameId;

function initSyntaxViewer() {
    const viewerContainer = document.getElementById('syntax-model-viewer');
    if (!viewerContainer) return;

    // Reset se esiste già
    if (syntaxRenderer) {
        cancelAnimationFrame(syntaxFrameId);
        viewerContainer.innerHTML = ''; 
    }

    const width = viewerContainer.clientWidth;
    const height = viewerContainer.clientHeight;

    // Scena
    syntaxScene = new THREE.Scene();
    
    // Camera
    syntaxCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    syntaxCamera.position.set(5, 10, 3); 

    // Renderer
    syntaxRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    syntaxRenderer.setSize(width, height);
    syntaxRenderer.setPixelRatio(window.devicePixelRatio);
    viewerContainer.appendChild(syntaxRenderer.domElement);

    // LUCI (Molto forti per assicurarsi che si veda)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    syntaxScene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(5, 10, 7);
    syntaxScene.add(dirLight);
    
    const backLight = new THREE.DirectionalLight(0xEB5335, 2); 
    backLight.position.set(-5, 2, -5);
    syntaxScene.add(backLight);

    // Controlli
    syntaxControls = new OrbitControls(syntaxCamera, syntaxRenderer.domElement);
    syntaxControls.enableDamping = true;
    syntaxControls.autoRotate = true;
    syntaxControls.autoRotateSpeed = 2.0;
    syntaxControls.enableZoom = true;

    // LOADER
    const loader = new GLTFLoader();
    
    // NOTA: Se il file ha spazi, a volte serve l'URL encoded. Provo a caricarlo così.
    // Se non va, rinomina il file in 'tavolino_copia.glb' e cambia qui sotto.
    loader.load('tavolino.glb', function (gltf) {
        const model = gltf.scene;
        
        // AUTO-CENTER & SCALE
        // Calcola il box per capire quanto è grande il modello
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Centra
        model.position.x += (model.position.x - center.x);
        model.position.y += (model.position.y - center.y);
        model.position.z += (model.position.z - center.z);

        model.position.y -= 1;
        
        // Scala per adattarlo alla vista (Fit to view)
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 4 / maxDim; // Aumenta questo numero se è troppo piccolo
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        syntaxScene.add(model);
        
    }, undefined, function (error) {
        console.error('ERRORE CARICAMENTO:', error);
        viewerContainer.innerHTML = '<div style="color:red; text-align:center; padding-top:40%;">ERROR LOADING MODEL<br>Check console (F12)</div>';
    });

    function animateSyntax() {
        if (!document.getElementById('syntax-model-viewer')) return;
        syntaxFrameId = requestAnimationFrame(animateSyntax);
        syntaxControls.update();
        syntaxRenderer.render(syntaxScene, syntaxCamera);
    }
    animateSyntax();
}

function openProduct(data, activeDiv) {
    labelElements.forEach(el => el.classList.remove('active'));
    activeDiv.classList.add('active');

    contentWrapper.classList.remove('visible');
    
    // Ferma l'animazione precedente del tavolino se c'era
    if (syntaxFrameId) cancelAnimationFrame(syntaxFrameId);

    setTimeout(() => {
        emptyState.style.display = 'none';
        contentWrapper.innerHTML = data.contentHTML;
        
        contentWrapper.style.display = 'block';
        requestAnimationFrame(() => {
            contentWrapper.classList.add('visible');
        });

        // SOLO SE È IL SYNTAX F1 (p3) AVVIA IL 3D
        if (data.id === "p3") {
            // Piccolo delay per dare tempo al DOM di creare il div #syntax-model-viewer
            setTimeout(() => {
                initSyntaxViewer();
            }, 100);
        }
    }, 300);
}

window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    labelRenderer.setSize(w, h);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

animate();