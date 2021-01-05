package vn.vnpt.icode.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.vnpt.icode.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
