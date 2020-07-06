<template>
  <footer>
    <p>
      Made with <i class="far fa-heart"></i> by
      <a
        href="http://github.com/thykingdoncome"
        target="_blank"
        rel="noopener noreferrer"
      >
        thykingdoncome <i class="fab fa-github"></i
      ></a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
  padding-bottom: 2rem;
}

a {
  color: #41b883;
}

a:hover {
  text-decoration: underline;
}

.fa-heart {
  color: rgb(129, 30, 30);
  animation: bounce 1.5s linear infinite;
}

@keyframes bounce {
  0% {
    transform: scale(0.8, 0.8);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(0.8, 0.8);
  }
}
</style>
