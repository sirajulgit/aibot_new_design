
const StarsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
    <defs>
     
      <filter id="starGlow">
        <feGaussianBlur stdDeviation="3.5" result="glow"/>
        <feMerge>
          <feMergeNode in="glow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <path id="star" d="M5,0 L6,3 9,4 6,6 5,9 4,6 1,4 4,3 Z" 
            fill="white" 
            filter="url(#starGlow)"/>
    </defs>

    <use href="#star" x="100">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="50s" repeatCount="indefinite" begin="0s"/>
    </use>

    <use href="#star" x="400">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="70s" repeatCount="indefinite" begin="20s"/>
    </use>

    <use href="#star" x="700">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="40s" repeatCount="indefinite" begin="10s"/>
    </use>

    <use href="#star" x="1000">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="60s" repeatCount="indefinite" begin="30s"/>
    </use>

    <use href="#star" x="1300">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="80s" repeatCount="indefinite" begin="25s"/>
    </use>

    <use href="#star" x="250">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="55s" repeatCount="indefinite" begin="15s"/>
    </use>

    <use href="#star" x="550">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="65s" repeatCount="indefinite" begin="5s"/>
    </use>

    <use href="#star" x="850">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="75s" repeatCount="indefinite" begin="40s"/>
    </use>

    <use href="#star" x="1150">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="45s" repeatCount="indefinite" begin="35s"/>
    </use>

    <use href="#star" x="1450">
      <animateTransform attributeName="transform" type="translate" from="0 900" to="0 -20" dur="58s" repeatCount="indefinite" begin="8s"/>
    </use>
</svg>


  );
  
  export default StarsIcon;
  